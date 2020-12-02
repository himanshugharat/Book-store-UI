import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';
import { AngularFireAuth } from '@angular/fire/auth'

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
  constructor(public firebaseService: FirebaseCrudService, public snackbar: MatSnackBar, public firebaseAuth: AngularFireAuth) { }

  ngOnInit(): void {
    // this.signup("pejigi6338@dkt1.com","pass333")
    //this.logout()
    this.signin("pejigi6338@dkt1.com", "pass333")
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
    this.firebaseService.loginUser(value).subscribe(res => {
      console.log(res)
      if (res.length == 1) {
        this.snackbar.open('login successfully', 'sucess')
        localStorage.setItem('token', res[0].docId)
        localStorage.setItem('email', res[0].email)
        localStorage.setItem('name', res[0].name)
      }
      else {
        this.snackbar.open('unable to login check your input', 'failed')
      }
    }
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
