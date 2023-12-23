import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlowUIComponent } from './p5-flow-ui/p5-flow-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowUIComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
