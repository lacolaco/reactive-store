import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';

@Component({
  selector: 'app-01-single-file',
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
export class SingleFileComponent {
  private readonly store = new Store({ initialValue: { count: 0 } });
  readonly count$ = this.store.select((state) => state.count);

  onIncrementClick() {
    this.store.update((state) => ({ ...state, count: state.count + 1 }), { label: 'Increment' });
  }

  onResetClick() {
    this.store.reset();
  }
}
