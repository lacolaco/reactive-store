import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { StoreOnUpdateFn, StoreInitOptions, CommandOptions, StoreUpdateChange } from './types';

export class Store<T> {
  private readonly valueSubject: BehaviorSubject<T>;
  private readonly storeUpdateChangeSubject: Subject<StoreUpdateChange<T>>;
  private readonly deprecatedOnUpdate?: StoreOnUpdateFn<T>;
  private readonly initialState: T;

  get valueChanges(): Observable<T> {
    return this.valueSubject.asObservable();
  }

  get value(): T {
    return this.valueSubject.getValue();
  }

  get storeUpdateChanges(): Observable<StoreUpdateChange<T>> {
    return this.storeUpdateChangeSubject.asObservable();
  }

  constructor(initOptions: StoreInitOptions<T>) {
    this.valueSubject = new BehaviorSubject(initOptions.initialValue);
    this.storeUpdateChangeSubject = new Subject<StoreUpdateChange<T>>();
    this.initialState = initOptions.initialValue;
    this.deprecatedOnUpdate = initOptions.onUpdate;
  }

  update(command: (state: T) => T, options: CommandOptions = {}) {
    const previousValue = this.valueSubject.getValue();
    const currentValue = command(previousValue);
    this.valueSubject.next(currentValue);
    this.storeUpdateChangeSubject.next({
      previousValue,
      currentValue,
      label: options.label,
    });
    if (typeof this.deprecatedOnUpdate === 'function') {
      this.deprecatedOnUpdate({
        previousValue,
        currentValue,
        label: options.label,
      });
    }
  }

  select<V>(selectFn: (state: T) => V): Observable<V> {
    return this.valueSubject.pipe(map(selectFn), distinctUntilChanged());
  }

  /**
   * Reset to the initial state
   */
  reset(): void {
    this.update(() => this.initialState);
  }
}
