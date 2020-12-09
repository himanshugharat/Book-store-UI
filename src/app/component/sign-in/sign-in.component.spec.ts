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

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent],
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
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form inValid', () => {
    component.signup.controls['name'].setValue('');
    component.signup.controls['email'].setValue('');
    component.signup.controls['password'].setValue('');
    component.signup.controls['phone'].setValue('');
    expect(component.signup.valid).toBeFalsy();
  })
  it('form valid', () => {
    component.signup.controls['name'].setValue('Tom');
    component.signup.controls['email'].setValue('nopoja2033@hebgsw.com');
    component.signup.controls['password'].setValue('gharat133');
    component.signup.controls['phone'].setValue(9909190881);
    expect(component.signup.valid).toBeTruthy();
  })
  it("call submit method", () => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(1)
  })

});
