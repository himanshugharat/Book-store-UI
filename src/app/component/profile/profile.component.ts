import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
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
  favoriteSeason: string;
  seasons: string[] = ['Work', 'Home', 'Other'];
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
  constructor(public bookService: FirebaseCrudService) { }

  ngOnInit(): void {

    this.uid = localStorage.getItem('token')
    this.bookService.getMethodBy('user', 'name', localStorage.getItem('name')).subscribe(re => {
      this.userData = []
      this.userData.push(re[0])
      console.log(this.userData)
    })
    // let data = {
    //   val:localStorage.getItem('token'),
    //   Work: { address: "addreamam  Work", city: "toWn", state: "UP" }
    // }
    //  this.bookService.createMethod('address', data)

    this.bookService.getMethodBy('address', 'value.val', localStorage.getItem('token')).subscribe(re => {
      this.userAdd = []
      this.userAdd.push(re)
      console.log(this.userAdd)

    })
  }
  addAddress() {
    let data = {
      val: localStorage.getItem('token'),
      addressData: { address: this.addressForm.get('address').value, city: this.addressForm.get('city').value, state: this.addressForm.get('state').value, type: this.addressType }
    }
    this.bookService.createMethod('address', data)
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
    this.bookService.updateMethod("address", data, id).catch(err=>{
      console.log("abbaab")
    })
  }


}
