import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';
import { environment } from 'src/environments/environment';

import { BagComponent } from './bag.component';

describe('BagComponent', () => {
  let component: BagComponent;
  let fixture: ComponentFixture<BagComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BagComponent],
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
        BrowserAnimationsModule, MatExpansionModule],
      providers: [FirebaseCrudService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form inValid', () => {
    component.CustomerForm.controls['name'].setValue('');
    component.CustomerForm.controls['phone'].setValue('');
    component.CustomerForm.controls['address'].setValue('');
    component.CustomerForm.controls['city'].setValue('');
    component.CustomerForm.controls['state'].setValue('');
    expect(component.CustomerForm.valid).toBeFalsy();
  })
  it('form valid', () => {
    component.CustomerForm.controls['name'].setValue('tom');
    component.CustomerForm.controls['phone'].setValue(9969399696);
    component.CustomerForm.controls['address'].setValue('');
    component.CustomerForm.controls['city'].setValue('mumbai');
    component.CustomerForm.controls['state'].setValue('mhah');
    expect(component.CustomerForm.valid).toBeFalsy();
  })

});
