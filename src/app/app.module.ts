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
import {MatBadgeModule} from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination'

@NgModule({
  declarations: [
    AppComponent,
    LoginBoardComponent,
    SignInComponent,
    LoginComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    GetBookComponent
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
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
