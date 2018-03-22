# @lacolaco/observable-state

A store implementation for state management with RxJS

https://yarn.pm/@lacolaco/observable-state

## Install

```
$ npm i @lacolaco/observable-state rxjs
```

## Concept

- RxJS-based: Use the ecosystem
- TypeScript: Type-safe state management
- Simple: Easy to understand what the library does and doesn't

## Adapters

- Angular: [@lacolaco/ngx-store](https://github.com/lacolaco/ngx/tree/master/libs/ngx-store)

## How to Use

### Create a store

```ts
import { Store } from '@lacolaco/observable-state';

const store: Store<string> = new Store('initialState');
assert.ok(store.getValue() === 'initialState');

store.dispatch(state => 'updated!');
assert.ok(store.getValue() === 'updated!');
```

### Subscribe state's observable

```ts
import { Store } from '@lacolaco/observable-state';

const store: Store<string> = new Store('initialState');

store.subscribe(state => {
    console.log(state);
});

store.dispatch(state => 'updated!');
```

### Select a scoped state

```ts
import { Store } from '@lacolaco/observable-state';

const store: Store<{count: number}> = new Store({count: 0});

const count$: Observable<number> = store.select(state => state.count);
count$.subscribe(count => {
    console.log(count);
});

store.dispatch(state => {
    return {
        count: state.count + 1
    };
});
```

### Middleware: Intercept dispatching

```ts
import { Store, StateHandler, Middleware } from '@lacolaco/observable-state';

const loggingMiddleware: Middleware = (next: StateHandler): StateHandler => {
    return (state: any) => {
        const newState = next(state);
        console.log(`[State]`, newState);
        return newState;
    };
}

const store = new Store(0, [
    loggingMiddleware,
]);
```