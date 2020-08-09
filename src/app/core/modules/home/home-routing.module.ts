import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { UserComponent } from '../../../modules/user/containers/user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Menu' },
    children: [
      {
        path: 'user',
        component: UserComponent,
        data: { title: 'User' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
