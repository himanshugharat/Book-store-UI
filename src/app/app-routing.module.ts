import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BagComponent } from './component/bag/bag.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GetBookComponent } from './component/get-book/get-book.component';
import { LoginBoardComponent } from './component/login-board/login-board.component';
import { LoginComponent } from './component/login/login.component';
import { OrderComponent } from './component/order/order.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [{
  path: "board", component: LoginBoardComponent, children: [
    { path: "signIn", component: SignInComponent },
    { path: "login", component: LoginComponent }]
},
{ path: "forgotPassword", component: ForgotPasswordComponent },
{
  path: "dashboard", component: DashboardComponent, data: { breadcrumb: 'Home' },
  children: [
    { path: "", component: GetBookComponent, data: { breadcrumb: 'detail' } },
    { path: "detail/:id", component: BookDetailsComponent, data: { breadcrumb: 'detail' } },
    { path: "list", component: WishlistComponent, data: { breadcrumb: 'list' } },
    { path: "bag", component: BagComponent, data: { breadcrumb: 'cart' } },
    { path: "order", component: OrderComponent, data: { breadcrumb: 'order' } },
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
