import { Component } from '@angular/core';

import { increment, reset, count$ } from './counter.store';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div>Count: {{ count$ | async }}</div>

      <button (click)="onIncrementClick()">Increment</button>
      <button (click)="onResetClick()">Reset</button>
    </div>
  `,
})
export class AppComponent {
  count$ = count$;

  onIncrementClick() {
    increment();
  }

  onResetClick() {
    reset();
  }
}
