# @lacolaco/reactive-store

A store implementation for state management with RxJS

https://yarn.pm/@lacolaco/reactive-store

## Install

```
$ npm i rxjs @lacolaco/reactive-store 
```

## Concept

* RxJS-based: Use the ecosystem
* TypeScript: Type-safe state management
* Simple: Easy to understand what the library does and doesn't
* Extensible: Easy to use your middlewares

## Adapters

* Angular: [@lacolaco/ngx-store](https://github.com/lacolaco/ngx/tree/master/libs/ngx-store) (v4.0.0+)

## How to Use

### Create a store

```ts
import { Store } from '@lacolaco/reactive-store';

const store = new Store('initialState');
assert.ok(store.getValue() === 'initialState');

store.patch(state => 'updated!');
assert.ok(store.getValue() === 'updated!');
```

### Subscribe state's observable

```ts
import { Store } from '@lacolaco/reactive-store';

const store = new Store('initialState');

store.subscribe(state => {
  console.log(state);
});

store.patch(state => 'updated!');
```

### Select a scoped state

```ts
import { Store } from '@lacolaco/reactive-store';

const store = new Store({ count: 0 });

const count$ = store.select(state => state.count);
count$.subscribe(count => {
  console.log(count);
});

store.patch(state => {
  return {
    count: state.count + 1,
  };
});
```

### Middleware: Intercept dispatching

```ts
import { Store, StateHandler, Middleware } from '@lacolaco/reactive-store';

const loggingMiddleware: Middleware = (next: StateHandler): StateHandler => {
  return (state: any) => {
    const newState = next(state);
    console.log(`[State]`, newState);
    return newState;
  };
};

const store = new Store(0, [loggingMiddleware]);
```
