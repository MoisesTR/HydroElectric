import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModulesPro, MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './core/modules/home/home.module';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthenticationModule } from './core/modules/authentication/authentication.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    AppRoutingModule,
    AuthenticationModule,
    HomeModule,
    BrowserAnimationsModule,
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
})
export class AppModule {}
