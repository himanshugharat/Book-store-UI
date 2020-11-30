import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgot = new FormGroup({
    email: new FormControl("", Validators.email),
  })
  constructor() { }

  ngOnInit(): void {
  }
  validEmail() {
    return this.forgot.get('email').hasError('required') ?
      "field is required" :
      "enter proper email id"
  }

}
