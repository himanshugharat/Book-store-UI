import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist = []
  wishlistBook = []
  nonoteCondition = false
  constructor(public bookService: FirebaseCrudService, public snakbar: MatSnackBar) { }

  ngOnInit(): void {
    this.getWishlist()
  }
  getWishlist() {
    this.wishlist = []
    this.wishlistBook = []
    this.bookService.getMethodBy('wishlist', 'value.userName', "tom").subscribe(re => {
      this.wishlist = []
      this.wishlist.push(re)
      this.wishlist.forEach(element => {
        element.forEach(element => {
          this.bookService.getMethodBy('book', 'id', element.value.bookId).subscribe(re => {
            this.wishlistBook.push(re)
          })
        });
      })
    })
  }
  removeBook(id, index) {
    this.bookService.deleteMethod('wishlist', id[index].docId).then(re => {
      this.ngOnInit()
    }).then(re => {
      this.snakbar.open("book removed from wishlist ", "success", { duration: 2000 })
    }).catch(err => {
      this.snakbar.open("unable to  removed book from wishlist ", "failure", { duration: 2000 })
    })
  }
  noItem() {
    return (this.wishlist.length == 0) ? this.nonoteCondition = true : this.nonoteCondition = false;
  }
}