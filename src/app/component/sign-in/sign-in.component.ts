import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signup = new FormGroup({
    name: new FormControl("", Validators.minLength(3)),
    phone: new FormControl("", Validators.pattern('[0-9]{10}')),
    email: new FormControl("", Validators.email),
    password: new FormControl("", Validators.minLength(8))
  })
  constructor(public firebaseService: FirebaseCrudService, public snackbar: MatSnackBar) { }

  ngOnInit(): void {
    // this.firebaseService.getUser("user")

  }
  onSubmit(value) {
    //   let userData = {
    //     email: value.email,
    //     name: value.name,
    //     number: value.phone,
    //     password: value.password
    //   }
    //   this.firebaseService.createUser(userData)
    //     .then(
    //       res => {
    //         this.snackbar.open('register successfully', 'sucess')
    //       }
    //     ).catch(err =>
    //       this.snackbar.open('unable to register', 'failed')
    //     )
  }
  validEmail() {
    return this.signup.get('email').hasError('required') ?
      "field is required" :
      "enter proper email id"
  }
  validPassword() {
    return this.signup.get('password').hasError('required') ?
      "field is required" :
      "password must be 8 char long"
  }
  validName() {
    return this.signup.get('name').hasError('required') ?
      "field is required" :
      "name must be atleast 3 char long"
  }
  validNumber() {
    return this.signup.get('phone').hasError('required') ?
      "field is required" :
      "number must be 10 digit long"
  }
}
