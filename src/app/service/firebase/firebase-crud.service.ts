import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// interface Item {
//   email: string,
//   name: string,
//   number: string,
//   password: string
// }
@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService {
  private itemsCollection: AngularFirestoreCollection;
  items
  constructor(public db: AngularFirestore) {
  }

  getAllMethod(docName) {
    this.itemsCollection = this.db.collection(docName);
    this.items = this.itemsCollection.valueChanges();
    return this.items
  }

  getMethodBy(docName, dataBy, value) {
    return this.db.collection(docName, ref => ref.where(dataBy, '==', value)).valueChanges({ idField: 'docId' })
  }


  createMethod(docName, value) {
    return this.db.collection(docName).add({
      value
    });
  }
  deleteMethod(docName, Id) {
    return this.db.collection(docName).doc(Id).delete();
  }
  updateMethod(docName, data, id) {
    return this.db.collection(docName).doc(id).set(data, { merge: true })
  }


}
