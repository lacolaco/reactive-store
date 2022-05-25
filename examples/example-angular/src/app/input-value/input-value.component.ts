import { Component } from '@angular/core';

import { setName, name$ } from './greeting.store';

@Component({
  selector: 'app-input-value',
  template: `
    <div>
      <div>Hello, {{ name$ | async }}!</div>

      <input [value]="name$ | async" #input (input)="onNameInput(input.value)" />
    </div>
  `,
})
export class InputValueComponent {
  name$ = name$;

  onNameInput(name: string) {
    setName(name);
  }
}
