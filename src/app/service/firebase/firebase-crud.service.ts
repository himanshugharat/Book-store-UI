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

  getAllMethod(docName) {
    this.itemsCollection = this.db.collection<Item>(docName);
    this.items = this.itemsCollection.valueChanges();
    return this.items
  }

  getMethodBy(docName, dataBy, value) {
    return this.db.collection<Item>(docName, ref => ref.where(dataBy, '==', value)).valueChanges({ idField: 'docId' })
  }

  createMethod(docName, value) {
    return this.db.collection(docName).add({
      value
    });
  }

}
