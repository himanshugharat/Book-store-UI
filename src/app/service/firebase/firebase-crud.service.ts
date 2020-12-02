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
      value
    });
  }


  // createUsera() {
  //   this.menu.forEach((obj)=>{
  //    this.db.collection('book').add({
  //     id: obj.id,
  //     author: obj.author,
  //     title: obj.title,
  //     image: obj.image,
  //     quantity: obj.quantity,
  //     price: obj.price,
  //     description: obj.description
  //    })
  //   });
  // }

  getUser(name) {
    this.itemsCollection = this.db.collection<Item>(name);
    this.items = this.itemsCollection.valueChanges();
    this.items.forEach(data => console.log(data))
    return this.items
  }

  loginUser(value) {
    return this.db.collection<Item>('user', ref => ref.where('email', '==', value.email)
      .where('password', '==', value.password)).valueChanges({ idField: 'docId' })
  }
}
