import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { element } from 'protractor';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book = []
  review = []
  reviewForm = new FormGroup({
    review: new FormControl()
  })
  id: number
  currentRate
  constructor(public bookservice: FirebaseCrudService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData()
    this.getReview()
  }

  getData() {
    this.book = []
    this.id = +this.route.snapshot.paramMap.get('id')
    this.bookservice.getMethodBy('book', 'id', this.id).subscribe(re => {
      this.book.push(re)
    })
  }

  submitReview() {
    let reviewData = {
      id: this.id,
      name: localStorage.getItem('name'),
      rating: this.currentRate,
      review: this.reviewForm.get('review').value
    }
    this.bookservice.createMethod('review', reviewData)
    this.getReview()
  }

  getReview() {
    this.review = []
    this.bookservice.getMethodBy('review', "value.id", this.id).subscribe(re => {
      this.review.push(re)
    })

  }
}
