import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthenticationComponent } from './core/modules/authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/modules/home/home.module').then((m) => m.HomeModule),
    data: { title: 'Menu' },
  },
  {
    path: 'login',
    component: AuthenticationComponent,
    data: { title: 'Login' },
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'Not found' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
