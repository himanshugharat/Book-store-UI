import { Component, OnInit } from '@angular/core';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
bag=[]
  constructor(public bookService:FirebaseCrudService) { }

  ngOnInit(): void {
 this.bookService.getMethodBy('wishlist','value.userName','tom').subscribe(re=>{
  this.bag.push(re) 
console.log(this.bag)})
  }

}
