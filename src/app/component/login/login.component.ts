import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

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
  data=[]
  constructor(public firebaseService: FirebaseCrudService, public snackbar: MatSnackBar, public firebaseAuth: AngularFireAuth,public route:Router) { }

  ngOnInit(): void {
    // this.signup("pejigi6338@dkt1.com","pass333")
    //this.logout()
    this.logout()
    //this.signin("pejigi6338@dkt1.com", "pass333")
  }
  async signin(email, pass) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, pass).then(re => {
      localStorage.setItem('user', JSON.stringify(re.user))
    })
  }
  async signup(email, pass) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, pass).then(re => {
      localStorage.setItem('user', JSON.stringify(re.user))
    })
  }
  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
   onSubmit(value) {
     this.firebaseService.getMethodBy('user','email',value.email).subscribe(re=>{
       this.data.push(re[0])
       console.log(this.data)
       if(re){
        this.snackbar.open('login successfully', 'sucess')
        localStorage.setItem('token', this.data[0].docId)
        localStorage.setItem('email', this.data[0].email)
        localStorage.setItem('name', this.data[0].name)
        this.route.navigate(['dashboard'])
       }
     })
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
