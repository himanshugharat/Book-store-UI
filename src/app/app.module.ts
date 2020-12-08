import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBoardComponent } from './component/login-board/login-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './component/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetBookComponent } from './component/get-book/get-book.component';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { StarRatingModule } from 'angular-star-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { BagComponent } from './component/bag/bag.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { OrderComponent } from './component/order/order.component';
import { BreadcrumbModule } from 'angular-crumbs';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoardComponent,
    SignInComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    GetBookComponent,
    BookDetailsComponent,
    HeaderComponent,
    FooterComponent,
    WishlistComponent,
    BagComponent,
    OrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase, 'bookstore'),
    AngularFirestoreModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatSelectModule,
    MatPaginatorModule,
    NgxPaginationModule,
    StarRatingModule.forRoot(),
    NgbModule,
    MatExpansionModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
