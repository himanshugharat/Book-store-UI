import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl("", Validators.email),
    password: new FormControl("", Validators.minLength(8))
  })
  constructor(public firebaseService:FirebaseCrudService, public snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit(value){
    this.firebaseService.loginUser(value).subscribe(re=>{console.log(re)
  if(re.length==1){
    this.snackbar.open('login successfully','sucess')
    localStorage.setItem('token',re[0].docId)
    localStorage.setItem('email',re[0].email)
    localStorage.setItem('name',re[0].name)
  }
else{
  this.snackbar.open('unable to login check your input','failed')
}}
    )
  }
  validEmail() {
    return this.login.get('email').hasError('required') ?
      "field is required" :
      "enter proper email id"
  }
  validPassword() {
    return this.login.get('password').hasError('required') ?
      "field is required" :
      "password must be 8 char long"
  }
}
