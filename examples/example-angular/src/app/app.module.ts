import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModuleComponent } from './examples/00-store-module/store-module.component';
import { ClassFieldComponent } from './examples/01-class-field/class-field.component';
import { LocalServiceComponent } from './examples/02-local-service/local-service.component';
import { WithImmerComponent } from './examples/03-with-immer/with-immer.component';
import { BaseClassComponent } from './examples/04-base-class/base-class.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreModuleComponent,
    ClassFieldComponent,
    LocalServiceComponent,
    WithImmerComponent,
    BaseClassComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
