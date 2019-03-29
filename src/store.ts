import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { StoreOnUpdateFn, StoreInitOptions, CommandOptions } from './types';

export class Store<T> {
  private readonly subject: BehaviorSubject<T>;
  private readonly onUpdate?: StoreOnUpdateFn<T>;

  get valueChanges(): Observable<T> {
    return this.subject.asObservable();
  }

  get value(): T {
    return this.subject.getValue();
  }

  constructor(initOptions: StoreInitOptions<T>) {
    this.subject = new BehaviorSubject(initOptions.initialValue);
    this.onUpdate = initOptions.onUpdate;
  }

  update(command: (state: T) => T, options: CommandOptions = {}) {
    const currentValue = this.subject.getValue();
    const newValue = command(currentValue);
    this.subject.next(newValue);
    if (typeof this.onUpdate === 'function') {
      this.onUpdate({
        previousValue: currentValue,
        currentValue: newValue,
        label: options.label,
      });
    }
  }

  select<V>(selectFn: (state: T) => V): Observable<V> {
    return this.subject.pipe(
      map(selectFn),
      distinctUntilChanged(),
    );
  }
}
