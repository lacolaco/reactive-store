import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as counterStore from './counter.store';

@Component({
  selector: 'app-03-with-immer',
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
})
export class WithImmerComponent {
  readonly count$ = counterStore.count$;

  onIncrementClick() {
    counterStore.increment();
  }

  onResetClick() {
    counterStore.reset();
  }
}
