import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { of } from 'rxjs';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';
import { environment } from 'src/environments/environment';

import { GetBookComponent } from './get-book.component';

fdescribe('GetBookComponent', () => {
  let component: GetBookComponent;
  let fixture: ComponentFixture<GetBookComponent>;
  let service:FirebaseCrudService
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase, 'bookstore'),
        AngularFirestoreModule, MatSnackBarModule, FlexLayoutModule, RouterTestingModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatIconModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatInputModule,
        BrowserModule,
        BrowserAnimationsModule, MatExpansionModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,MatFormFieldControl],
      declarations: [GetBookComponent],
      providers:[FirebaseCrudService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('when given service should return observable',()=>{
    el=fixture.debugElement.query(By.css('.sortType')).nativeElement
    el.click()
    expect(component.selectChange(' ')).toHaveBeenCalledTimes(1)
  })
});
