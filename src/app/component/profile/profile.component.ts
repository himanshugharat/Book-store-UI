import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData = []
  addressType = 0
  enableEdit = true
  enableAddEdit = true
  enableAdd = false
  uid
  userAdd = []
  place = 0
  address
  city
  state
  addressForm = new FormGroup({
    address: new FormControl(),
    city: new FormControl(),
    state: new FormControl()
  })
  constructor(public bookService: FirebaseCrudService, public snakbar: MatSnackBar) { }

  ngOnInit(): void {

    this.uid = localStorage.getItem('token')
    this.bookService.getMethodBy('user', 'name', localStorage.getItem('name')).subscribe(re => {
      this.userData = []
      this.userData.push(re[0])
    })
    this.bookService.getMethodBy('address', 'value.val', localStorage.getItem('token')).subscribe(re => {
      this.userAdd = []
      this.userAdd.push(re)
    })
  }
  addAddress() {
    let data = {
      val: localStorage.getItem('token'),
      addressData: { address: this.addressForm.get('address').value, city: this.addressForm.get('city').value, state: this.addressForm.get('state').value, type: this.addressType }
    }
    this.bookService.createMethod('address', data).then(re => {
      this.snakbar.open("address added successfully ", "success", { duration: 2000 })
    }).catch(err => {
      this.snakbar.open("unable to add address  ", "failed", { duration: 2000 })
    })
  }
  changeAddress(value) {
    this.address = value
  }
  changeCity(value) {
    this.city = value
  }
  changeState(value) {
    this.state = value
  }
  updateAddress(id) {
    console.log(id)
    let data = {
      value: {
        val: localStorage.getItem('token'),
        addressData: { address: this.address, city: this.city, state: this.state, type: this.addressType }
      }
    }
    this.bookService.updateMethod("address", data, id).catch(err => {
      this.snakbar.open("address unable to updated", "failed", { duration: 2000 })
    }).then(re => {
      this.snakbar.open("address updated", "success", { duration: 2000 })
    })
  }


}
