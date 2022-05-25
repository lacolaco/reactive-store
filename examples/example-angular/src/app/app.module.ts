import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BasicUsageComponent } from './examples/00-basic-usage/basic-usage.component';
import { SingleFileComponent } from './examples/01-single-file-component/single-file.component';
import { StoreServiceComponent } from './examples/02-store-service/store-service.component';
import { WithImmerComponent } from './examples/03-with-immer/with-immer.component';
import { StatefulComponent } from './examples/04-stateful-component/stateful.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicUsageComponent,
    SingleFileComponent,
    StoreServiceComponent,
    WithImmerComponent,
    StatefulComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
