# @lacolaco/reactive-store

Very simple store implementation for state management with RxJS.

https://yarn.pm/@lacolaco/reactive-store

[![@lacolaco/reactive-store Dev Token](https://badge.devtoken.rocks/@lacolaco/reactive-store)](https://devtoken.rocks/package/@lacolaco/reactive-store)

[![CircleCI](https://circleci.com/gh/lacolaco/reactive-store.svg?style=svg)](https://circleci.com/gh/lacolaco/reactive-store)

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

counterStore.valueChanges.subscribe(value => {
  console.log(value); // => 1
});

// You can use `pipe` and operators of RxJS.
const doubled$: Observable<number> = counterStore.valueChanges.pipe(map(value => value * 2));
```

#### Update the store: `update((state: T) => T): void`

`update` takes a function which takes the current value and returns a new value.

```ts
export const counterStore = new Store<CounterState>({ initialValue: 1 });

counterStore.update(value => value + 1);

console.log(counterStore.value); // => 2
```

#### Observe scoped value: `.select((state: T) => U): Observable<U>`

`select` method is for mapping and memoize the scoped value.
This is using internally it uses RxJS's `map` and `distinctUntilChanged` operators.

```ts
export const counterStore = new Store<CounterState>({
  initialValue: { count: 1 },
});

counterStore.valueChanges.subscribe(value => {
  console.log(value); // => { count: 1 }
});

const selected$: Observable<number> = counterStore.select(value => value.count);

selected$.subscribe(value => {
  console.log(value); // => 1
});
```

### Store Options

#### Listen onChange event

A store dispatchs an event when its state has been updated.

```ts
const counterStore = new Store<CounterState>({
  initialValue,
  onUpdate: change => {
    console.log(`Previous Value`, change.previousValue);
    console.log(`Current Value`, change.currentValue);
    console.log(`Label`, change.label);
  },
});
```

**label** is a string value you can pass to `update` as an option.

```ts
export const counterStore = new Store<CounterState>({ initialValue: 1 });

counterStore.update(value => value + 1, { label: 'increment' });
```

## Advanced Usage

### Use in Angular

In Angular application, I recommend to creating new store with extending `Store` and provide it for Dependency Injection.

```ts
// state/counter.store.ts
import { Injectable } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';

export interface CounterState {
  count: number;
}

export const initialValue: CounterState = {
  count: 0,
};

// Or you can use your NgModule's `providers` array to provide this service.
@Injectable({ providedIn: 'root' })
export class CounterStore extends Store<CounterState> {
  constructor() {
    super({ initialValue });
  }
}
```

```ts
// app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <p>Counter: {{ count$ | async }}</p>
  `,
})
export class AppComponent implements OnInit {
  count$: Observable<number>;
  constructor(private counterStore: CounterStore) {
    this.count$ = this.counterStore.select(value => value.count);
  }

  incrementCount() {
    this.counterStore.update(value => ({ ...value, count: value.count + 1 }), { label: 'increment' });
  }
}
```

---

### License

MIT

### Author

Suguru Inatomi a.k.a. lacolaco

Patreon: https://www.patreon.com/lacolaco
