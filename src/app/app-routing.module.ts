import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginBoardComponent } from './component/login-board/login-board.component';
import { SignInComponent } from './component/sign-in/sign-in.component';

const routes: Routes = [{
  path: "board", component: LoginBoardComponent, children: [
{path:"signIn",component:SignInComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
