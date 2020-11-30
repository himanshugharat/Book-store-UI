import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { LoginBoardComponent } from './component/login-board/login-board.component';
import { LoginComponent } from './component/login/login.component';
import { SignInComponent } from './component/sign-in/sign-in.component';

const routes: Routes = [{
  path: "board", component: LoginBoardComponent, children: [
    { path: "signIn", component: SignInComponent },
    { path: "login", component: LoginComponent }]
},
{path:"forgotPassword",component:ForgotPasswordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
