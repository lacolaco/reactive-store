import { Observable, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export type StateHandler<T1, T2> = (state: T1) => T2;
export type Select<T1, T2> = StateHandler<T1, T2>;
export type Patch<T> = StateHandler<T, T>;
export type Middleware = (next: StateHandler<any, any>) => StateHandler<any, any>;

export class Store<T> extends BehaviorSubject<T> {
  private middleware: StateHandler<T, T>;

  constructor(initialState: T, middlewares: Middleware[] = []) {
    const middleware = middlewares.reduceRight(
      (next: StateHandler<any, any>, m: Middleware) => m(next),
      (state: any) => state,
    );
    super(middleware(initialState));
    this.middleware = middleware;
  }

  // @override
  next(value: T): void {
    super.next(this.middleware(value));
  }

  patch(fn: Patch<T>): void {
    this.next(fn(this.getValue()));
  }

  select<R>(fn: Select<T, R>): Observable<R> {
    return this.pipe(map(fn), distinctUntilChanged());
  }
}
