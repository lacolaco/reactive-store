import { ChangeDetectionStrategy, Component } from '@angular/core';

import * as counterStore from './counter.store';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <div>Count: {{ count$ | async }}</div>

      <button (click)="onIncrementClick()">Increment</button>
      <button (click)="onResetClick()">Reset</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  readonly count$ = counterStore.count$;

  onIncrementClick() {
    counterStore.increment();
  }

  onResetClick() {
    counterStore.reset();
  }
}
