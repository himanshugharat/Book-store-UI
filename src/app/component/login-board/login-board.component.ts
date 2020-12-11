import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { GoogleService } from 'src/app/service/fire-auth/google.service';
import firebase from 'firebase/app';
@Component({
  selector: 'app-login-board',
  templateUrl: './login-board.component.html',
  styleUrls: ['./login-board.component.scss']
})
export class LoginBoardComponent implements OnInit {

  constructor(public auth: AngularFireAuth) {
  }
  

  ngOnInit(): void {
    
  }

}
