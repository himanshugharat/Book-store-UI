import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
interface Item {
  email: string,
  name: string,
  number: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  constructor(public db: AngularFirestore) {
  }

  createUser(value) {
    return this.db.collection('user').add({
      email: value.email,
      name: value.name,
      number: value.phone,
      password: value.password
    });
  }
  getUser() {
    this.itemsCollection = this.db.collection<Item>('user');
    this.items = this.itemsCollection.valueChanges();
    this.items.forEach(data => console.log(data))
  }
  loginUser(value) {
    return this.db.collection<Item>('user', ref => ref.where('email', '==', value.email)
      .where('password', '==', value.password)).valueChanges({ idField: 'docId' })
  }
}
