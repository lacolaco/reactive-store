import { Component } from '@angular/core';

import { increment, reset, count$ } from './counter.store';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <div>Count: {{ count$ | async }}</div>

      <button (click)="onIncrementClick()">Increment</button>
      <button (click)="onResetClick()">Reset</button>
    </div>
  `,
})
export class CounterComponent {
  count$ = count$;

  onIncrementClick() {
    increment();
  }

  onResetClick() {
    reset();
  }
}
