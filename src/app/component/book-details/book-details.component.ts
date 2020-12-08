import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
  constructor(public bookservice: FirebaseCrudService, public route: ActivatedRoute, public snakbar: MatSnackBar) { }

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
    this.bookservice.createMethod('review', reviewData).then(re => {
      this.snakbar.open("added Review", 'success', { duration: 2000 })
    }).catch(re => {
      this.snakbar.open("unable to added Review", 'failure', { duration: 2000 })
    })
    this.getReview()
  }

  getReview() {
    this.review = []
    this.bookservice.getMethodBy('review', "value.id", this.id).subscribe(re => {
      this.review.push(re)
    })
  }

  addToBag() {
    let bagVal = {
      bookId: this.id,
      userName: localStorage.getItem('name'),
      userId: localStorage.getItem('token'),
    }
    this.bookservice.createMethod('bag', bagVal).then(re => {
      this.snakbar.open("added item to cart", 'success', { duration: 2000 })
    }).catch(re => {
      this.snakbar.open("unable to added item to cart", 'failure', { duration: 2000 })
    })
  }

  addTowishlist() {
    let wishVal = {
      bookId: this.id,
      userName: localStorage.getItem('name'),
      userId: localStorage.getItem('token'),
    }
    this.bookservice.createMethod('wishlist', wishVal).then(re => {
      this.snakbar.open("added item to wishlist", 'success', { duration: 2000 })
    }).catch(re => {
      this.snakbar.open("unable to added item to wishlist", 'failure', { duration: 2000 })
    })
  }
}
