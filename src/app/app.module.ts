import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlowUIComponent } from './p5-flow-ui/p5-flow-ui.component';

import { CanvasConfigService } from './Services/CanvasConfigService/canvas-config.service';
import { p5BootstrapService } from './Services/p5-bootstrap-service/p5-bootstrap.service'

@NgModule({
  declarations: [
    AppComponent,
    FlowUIComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CanvasConfigService, 
    p5BootstrapService,
    {
      provide: APP_INITIALIZER,
      useFactory: (p5BootstrapService: p5BootstrapService) => () => p5BootstrapService.executeExtensionScripts(),
      deps: [p5BootstrapService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }