import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';

const store = new Store({ initialValue: { count: 0 } });

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
  readonly count$ = store.select((state) => state.count);

  onIncrementClick() {
    store.update((state) => ({ ...state, count: state.count + 1 }), { label: 'Increment' });
  }

  onResetClick() {
    store.reset();
  }
}
