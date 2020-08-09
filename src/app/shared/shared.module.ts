import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

@NgModule({
  declarations: [],
  exports: [CommonModule, MDBBootstrapModulesPro, FormsModule, ReactiveFormsModule, HttpClientModule],
})
export class SharedModule {}
