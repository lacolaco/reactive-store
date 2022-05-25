import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CounterStore } from './store';

@Component({
  selector: 'app-02-injected-store',
  template: `
    <div>Count: {{ count$ | async }}</div>

    <button (click)="onIncrementClick()">Increment</button>
    <button (click)="onResetClick()">Reset</button>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CounterStore],
})
export class InjectedStoreComponent {
  readonly count$ = this.store.count$;

  constructor(private readonly store: CounterStore) {}

  onIncrementClick() {
    this.store.increment();
  }

  onResetClick() {
    this.store.reset();
  }
}
