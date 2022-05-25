import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CounterStore } from './store.service';

@Component({
  selector: 'app-02-store-service',
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
export class StoreServiceComponent {
  readonly count$ = this.store.count$;

  constructor(private readonly store: CounterStore) {}

  onIncrementClick() {
    this.store.increment();
  }

  onResetClick() {
    this.store.reset();
  }
}
