import { Component, OnInit, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist=[]
  wishlistBook=[]
  constructor(public bookService:FirebaseCrudService) { }

  ngOnInit(): void {
    this.getWishlist()
}
getWishlist(){
  this.wishlist=[]
  this.wishlistBook=[]
  this.bookService.getMethodBy('wishlist','value.userName',"tom").subscribe(re=>{
    this.wishlist=[]
    this.wishlist.push(re)
    console.log(this.wishlist)
    this.wishlist.forEach(element=>{
      element.forEach(element => {
        console.log(element.value.bookId)
         this.bookService.getMethodBy('book','id',element.value.bookId).subscribe(re=>{
       //   this.wishlistBook=[]
           this.wishlistBook.push(re)
           console.log(this.wishlistBook)
          })
      });
    })
  })
}
removeBook(id,index){
  console.log(id[index].docId)
  this.bookService.deleteMethod('wishlist',id[index].docId).then(re=>{
   // this.wishlist.splice(0,index-1)
    this.ngOnInit()
  })
}
noItem(){
  if(this.wishlist.length>0) 
   return false 
   else
   return true
}
}