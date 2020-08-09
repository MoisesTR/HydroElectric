import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { UserModule } from '../../../modules/user/user.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, UserModule, HomeRoutingModule],
})
export class HomeModule {}
