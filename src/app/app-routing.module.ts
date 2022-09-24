import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';


const redirectToLogin = () => redirectUnauthorizedTo(['auth/login']);
const redirectToHome = () => redirectLoggedInTo(['/dashboard']);

const routes: Routes = [
  {
    path: '',
    ...canActivate(redirectToLogin),
    loadChildren: () => {
      return import('./layout/layout.module').then((m) => m.LayoutModule);
    }
  },
  {
    path: 'auth',
    ...canActivate(redirectToHome),
    loadChildren: () => {
      return import('./auth/auth.module').then((m) => m.AuthModule);
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
