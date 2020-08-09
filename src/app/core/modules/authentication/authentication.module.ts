import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [SharedModule],
})
export class AuthenticationModule {}
