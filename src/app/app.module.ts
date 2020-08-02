import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MDBBootstrapModulesPro, MDBSpinningPreloader} from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
