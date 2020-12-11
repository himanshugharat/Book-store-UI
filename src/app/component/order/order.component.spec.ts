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
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { observable } from 'rxjs';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';
import { environment } from 'src/environments/environment';

import { OrderComponent } from './order.component';

fdescribe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderComponent],
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
        BrowserAnimationsModule,
      ],
      providers: [FirebaseCrudService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('when given request to db has to return data  ', () => {
    component.bookService.getAllMethod('order').subscribe(re => {
      expect(re.length).toBeGreaterThan(0)
    })
  });
});
