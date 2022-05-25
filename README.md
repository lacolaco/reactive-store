# @lacolaco/reactive-store

Very simple store implementation for state management with RxJS.

https://yarn.pm/@lacolaco/reactive-store

[![CI](https://github.com/lacolaco/reactive-store/actions/workflows/ci.yml/badge.svg)](https://github.com/lacolaco/reactive-store/actions/workflows/ci.yml)

[![npm version](https://badge.fury.io/js/%40lacolaco%2Freactive-store.svg)](https://badge.fury.io/js/%40lacolaco%2Freactive-store)

## Install

```
$ yarn add rxjs @lacolaco/reactive-store
```

## Concept

- RxJS: Use the ecosystem
- TypeScript: Type-safe state management
- Simple: Easy to understand what the library does and doesn't

## How to Use

- [Stackblitz Demo](https://stackblitz.com/edit/typescript-36dxgn?file=index.ts)
- [Angular Examples](/examples/example-angular/src/app/examples/)

### Create a store: `new Store({ initialValue })`

```ts
import { Store } from '@lacolaco/reactive-store';

export interface CounterState {
  count: number;
}

export const initialValue: CounterState = {
  count: 0,
};

export const counterStore = new Store<CounterState>({ initialValue });
```

### Use the store

#### Get the current value: `.value: T`

```ts
export const counterStore = new Store<CounterState>({ initialValue: 1 });

console.log(counterStore.value); // => 1
```

#### Observe value changes: `.valueChanges: Observable<T>`

`.valueChange` returns a _raw_ observable of the store.

```ts
export const counterStore = new Store<CounterState>({ initialValue: 1 });

counterStore.valueChanges.subscribe((value) => {
  console.log(value); // => 1
});

// You can use `pipe` and operators of RxJS.
const doubled$: Observable<number> = counterStore.valueChanges.pipe(map((value) => value * 2));
```

#### Update the store: `.update((value: T) => T): void`

`update` takes a function which takes the current value and returns a new value.

```ts
export const counterStore = new Store<CounterState>({ initialValue: 1 });

counterStore.update((value) => value + 1);

console.log(counterStore.value); // => 2
```

#### Observe scoped value: `.select((value: T) => U): Observable<U>`

`select` method is for mapping and memoize the scoped value.
This is using internally it uses RxJS's `map` and `distinctUntilChanged` operators.

```ts
export const counterStore = new Store<CounterState>({
  initialValue: { count: 1 },
});

counterStore.valueChanges.subscribe((value) => {
  console.log(value); // => { count: 1 }
});

const selected$: Observable<number> = counterStore.select((value) => value.count);

selected$.subscribe((value) => {
  console.log(value); // => 1
});
```

#### Listen update events: `.storeUpdateChanges: Observable<StoreUpdateChange<T>>`

A store dispatchs a change event every time updating the store.
This is for debugging or integrating with other tools.

```ts
const counterStore = new Store<CounterState>({
  initialValue,
});

counterStore.storeUpdateChanges.subscribe((change) => {
  console.log(`Previous Value`, change.previousValue);
  console.log(`Current Value`, change.currentValue);
  console.log(`Label`, change.label);
});
```

**label** is a string value you can pass to `update` as an option.

```ts
export const counterStore = new Store<CounterState>({ initialValue: 1 });

counterStore.update((value) => value + 1, { label: 'increment' });
```

#### Reset the store: `.reset(): void`

`reset` the store with the initial value.

```ts
export const counterStore = new Store<CounterState>({ initialValue: 1 });

counterStore.reset();
```

---

### License

MIT

### Author

Suguru Inatomi a.k.a. [@lacolaco](https://twitter.com/laco2net)
