import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';

@Component({
  selector: 'app-04-base-class',
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
export class BaseClassComponent extends Store<{ count: number }> {
  readonly count$ = this.select((state) => state.count);

  constructor() {
    super({ initialValue: { count: 0 } });
  }

  onIncrementClick() {
    this.update((state) => ({ ...state, count: state.count + 1 }), { label: 'Increment' });
  }

  onResetClick() {
    this.reset();
  }
}
