import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData = []
  enableEdit = true
  enableAddEdit = true
  enableAdd = false
  favoriteSeason: string;
  seasons: string[] = ['Work', 'Home', 'Other'];
  uid
  userAdd = []
  place=0
  constructor(public bookService: FirebaseCrudService) { }

  ngOnInit(): void {
    this.uid = localStorage.getItem('token')
    this.bookService.getMethodBy('user', 'name', localStorage.getItem('name')).subscribe(re => {
      this.userData.push(re[0])
      console.log(this.userData)
    })
    // let data = {
    //   data: {
    //     val: this.uid, add: [
    //       { address: "addreamam  Work", city: "mumbai", state: "maha" },
    //       { address: "addreamam Home", city: "mumbai", state: "maha" },
    //       { address: "addreamam Other", city: "mumbai", state: "maha" }
    //     ]
    //   }
    // }
    // this.bookService.createMethod('address', data)
    this.bookService.getMethodBy('address', 'value.data.val', localStorage.getItem('token')).subscribe(re => {
      this.userAdd.push(re[0])
      console.log(this.userAdd[0].value.data)
    })
  }
    
  


}
