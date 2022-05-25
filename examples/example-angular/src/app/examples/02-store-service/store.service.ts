import { Injectable } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';

@Injectable()
export class CounterStore extends Store<{ count: number }> {
  readonly count$ = this.select((state) => state.count);

  constructor() {
    super({
      initialValue: { count: 0 },
    });
  }

  increment() {
    this.update((state) => ({ ...state, count: state.count + 1 }), {
      label: 'Increment',
    });
  }
}
