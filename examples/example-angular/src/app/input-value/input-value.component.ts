import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@lacolaco/reactive-store';

const store = new Store({
  initialValue: { name: 'World' },
});

@Component({
  selector: 'app-input-value',
  template: `
    <div>
      <div>Hello, {{ name$ | async }}!</div>

      <input
        [value]="name$ | async"
        #input
        (input)="onNameInput(input.value)"
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputValueComponent {
  readonly name$ = store.select((state) => state.name);

  onNameInput(name: string) {
    store.update((state) => ({ ...state, name }));
  }
}
