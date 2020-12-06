import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
  bag = []
  bagBook = []
  step = 0;
  noOfItem = 1
  custData

  CustomerForm = new FormGroup({
    name: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    state: new FormControl()
  })

  constructor(public bookService: FirebaseCrudService, public snakbar: MatSnackBar) { }

  ngOnInit(): void {
    this.bookService.getMethodBy('bag', 'value.userId', localStorage.getItem('token')).subscribe(re => {
      this.bag.push(re)
      console.log(this.bag)
      this.getBagDetail()
      console.log(localStorage.getItem('name'))
    })
  }

  getBagDetail() {
    this.bag.forEach(element => {
      element.forEach(element => {
        this.bookService.getMethodBy('book', 'id', element.value.bookId).subscribe(re => {
          this.bagBook.push(re[0])
          console.log(this.bagBook)
        })
      })
    })
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  addItem() {
    this.noOfItem++
  }

  removeItem() {
    if (this.noOfItem > 1)
      this.noOfItem--
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
      bookDetail: this.bagBook[0],
      custDetail: this.custData,
      userDetail: {
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        userId: localStorage.getItem('token')
      },
      time: Date()
    }
    this.bookService.createMethod('order', value).catch(err => {
      this.snakbar.open('unable to place order plz try again', "failed")
    })
  }
}
