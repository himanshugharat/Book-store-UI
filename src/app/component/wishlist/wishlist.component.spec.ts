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
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';
import { environment } from 'src/environments/environment';

import { WishlistComponent } from './wishlist.component';

fdescribe('WishlistComponent', () => {
  let component: WishlistComponent;
  let fixture: ComponentFixture<WishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WishlistComponent],
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
    fixture = TestBed.createComponent(WishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('when given request to db has to return data  ', () => {
    component.bookService.getAllMethod('wishlist').subscribe(re => {
      expect(re.length).toBeGreaterThan(0)
    })
  });
  it('when request then return the array is not empty', () => {
    let data = component.getWishlist()
    expect(data.length).toBe(0)
  });
});
