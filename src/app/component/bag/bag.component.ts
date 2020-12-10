import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
  bag = []
  price = new Array(5).fill(1)
  bagBook = []
  step = true;
  step1 = false;
  step2 = false;
  noOfItem = 1
  custData
  totalAmount
  nonoteCondition = false
  item = this.total()
  CustomerForm = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    state: new FormControl()
  })

  constructor(public bookService: FirebaseCrudService, public snakbar: MatSnackBar, public route: Router) { }

  ngOnInit(): void {
    this.getBag()
  }

  getBag() {
    this.bag = []
    this.bagBook = []
    this.bookService.getMethodBy('bag', 'value.userName', "tom").subscribe(re => {
      this.bag = []
      this.bag.push(re)
      console.log(this.bag)
      this.bag.forEach(element => {
        element.forEach(element => {
          console.log(element.value.bookId)
          this.bookService.getMethodBy('book', 'id', element.value.bookId).subscribe(re => {
            this.bagBook.push(re)
            console.log(this.bagBook)
          })
        });
      })
    })
  }

  setStep(index: number) {
    this.step = true;
  }

  setStep1(index: number) {
    this.step1 = true;
  }

  setStep2(index: number) {
    this.step2 = true;
  }

  addItem(index) {
    this.price[index] = ++this.noOfItem
  }

  removeItem(index) {
    if (this.noOfItem > 0)
      this.price[index] = --this.noOfItem
  }

  custDetail(val) {
    this.custData = {
      name: val.name,
      phone: val.phone,
      address: val.address,
      city: val.city,
      state: val.state
    }
  }

  addDataToOrder() {
    let value = {
      totalPrice: this.bagBook[0].price * this.noOfItem,
      bookDetail: this.bagBook[0][0],
      custDetail: this.custData,
      userDetail: {
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        userId: localStorage.getItem('token')
      },
      time: Date()
    }
    this.bookService.createMethod('order', value).then(a => {
      this.bag.forEach(element => {
        element.forEach(element => {
          this.bookService.deleteMethod('bag', element.docId).then(a => console.log("ok"))
        })
      });
      this.bag = []
      this.nonoteCondition = true
    }).then(re => {
      this.route.navigate(['dashboard/orderDone'])
    }).catch(err => {
      this.snakbar.open('unable to place order plz try again', "failed")
    })
  }

  total() {
    this.totalAmount = 0
    let i = 0
    this.bagBook.forEach(element => {
      this.totalAmount += element[0].price * this.price[i++]
    })
    return this.totalAmount
  }

  removeBook(id, index) {
    console.log(id[index].docId)
    this.bookService.deleteMethod('bag', id[index].docId).then(re => {
      this.ngOnInit()
    }).then(re => {
      this.snakbar.open("book removed successfully", "success", { duration: 2000 })
    }).catch(err=>{
      this.snakbar.open("unable to  removed book", "failed", { duration: 2000 })
    })
  }
  noItem() {
    return (this.bag.length == 2) ? this.nonoteCondition = true : this.nonoteCondition = false;
  }
}
