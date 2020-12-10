import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';
import { environment } from 'src/environments/environment';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [AngularFireModule.initializeApp(environment.firebase, 'bookstore'),
        AngularFirestoreModule, MatSnackBarModule, FlexLayoutModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatIconModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatInputModule,
        BrowserModule,
        BrowserAnimationsModule],
      providers: [FirebaseCrudService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  fit('form inValid', () => {
    component.login.controls['email'].setValue('');
    component.login.controls['password'].setValue('');
    expect(component.login.valid).toBeFalsy();
  })
  fit('form valid', () => {
    component.login.controls['email'].setValue('nopoja2033@hebgsw.com');
    component.login.controls['password'].setValue('gharat133');
    expect(component.login.valid).toBeTruthy();
  })
  fit("call submit method", () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1)
  })
});
