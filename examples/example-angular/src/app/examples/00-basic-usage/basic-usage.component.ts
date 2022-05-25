import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as counterStore from './counter.store';

@Component({
  selector: 'app-00-basic-usage',
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
export class BasicUsageComponent {
  readonly count$ = counterStore.count$;

  onIncrementClick() {
    counterStore.increment();
  }

  onResetClick() {
    counterStore.reset();
  }
}
