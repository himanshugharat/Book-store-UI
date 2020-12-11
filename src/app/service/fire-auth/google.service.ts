import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor( public afAuth: AngularFireAuth) { }
  // googleAuth(){
  //   return this.
  // }
  AuthLogin(){
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }
}
