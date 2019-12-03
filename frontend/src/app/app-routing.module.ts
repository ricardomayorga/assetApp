import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RequestResetComponent } from './components/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/response-reset/response-reset.component';

const appRoutes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'request-password',
    component: RequestResetComponent
  },
  {
    path:'response-password-reset',
    component: ResponseResetComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
