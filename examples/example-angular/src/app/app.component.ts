import { Component } from '@angular/core';

import { increment, reset, count$ } from './counter.store';
import { setName, name$ } from './greeting.store';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <div>Count: {{ count$ | async }}</div>

      <button (click)="onIncrementClick()">Increment</button>
      <button (click)="onResetClick()">Reset</button>
    </div>

    <div>
      <div>Hello, {{ name$ | async }}!</div>

      <input [value]="name$ | async" #input (input)="onNameInput(input.value)" />
    </div>
  `,
})
export class AppComponent {
  count$ = count$;
  name$ = name$;

  onIncrementClick() {
    increment();
  }

  onResetClick() {
    reset();
  }

  onNameInput(name: string) {
    setName(name);
  }
}
