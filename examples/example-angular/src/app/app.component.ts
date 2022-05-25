import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-00-basic-usage></app-00-basic-usage>
    <app-01-single-file></app-01-single-file>
    <app-02-injected-store></app-02-injected-store>
    <app-03-with-immer></app-03-with-immer>
    <app-04-stateful-component></app-04-stateful-component>
  `,
})
export class AppComponent {}
