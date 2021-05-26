import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { StoreInitOptions, CommandOptions, StoreUpdateChange } from './types';

export const RESET = 'store/reset';

export class Store<T> {
  private readonly valueSubject: BehaviorSubject<T>;
  private readonly storeUpdateChangeSubject: Subject<StoreUpdateChange<T>>;
  private readonly initialValue: T;

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
    this.initialValue = initOptions.initialValue;
  }

  update(command: (state: T) => T, options: CommandOptions = {}): void {
    const previousValue = this.valueSubject.getValue();
    const currentValue = command(previousValue);
    this.valueSubject.next(currentValue);
    this.storeUpdateChangeSubject.next({
      previousValue,
      currentValue,
      label: options.label,
    });
  }

  select<V>(selectFn: (state: T) => V): Observable<V> {
    return this.valueSubject.pipe(map(selectFn), distinctUntilChanged());
  }

  /**
   * Reset to the initial value
   */
  reset(options: CommandOptions = { label: RESET }): void {
    this.update(() => this.initialValue, options);
  }
}
