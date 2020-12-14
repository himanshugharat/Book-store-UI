import { Component, OnInit ,OnChanges, SimpleChanges} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';
import { SharedService } from 'src/app/service/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // header = new FormGroup({
  //   dataa: new FormControl("a")
  // }).valueChanges.subscribe(re=>{
  //   console.log(re)
  // })
  header: FormGroup
  name
  email
  bag
  list
  constructor(public route: Router, public shared: SharedService,private fb:FormBuilder,public book:FirebaseCrudService ) { 
    this.header=fb.group({
      dataa:[""]
    })
    this.header.get('dataa').valueChanges.subscribe(re=>{
      this.shared.change(re)
    })
  }
 

  ngOnInit(): void {
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
    this.book.getAllMethod('bag').subscribe(re => {
      this.bag=re.length
      if(this.bag==0){
        this.bag=null
      }
    })
    this.book.getAllMethod('wishlist').subscribe(re => {
     this.list=re.length 
     if(this.list==0){
       this.list=null
     }
    })
    console.log(this.bag)
    console.log(this.list)
  }
  logout() {
    this.route.navigate(['board/login'])
    localStorage.clear()
  }
 
}
