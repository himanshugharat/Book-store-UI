import { Component, OnInit } from '@angular/core';
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
   
   this.getwishlist()
   //this.getBagDetail()
  }
  getwishlist(){
    this.wishlist=[]
    this.bookService.getMethodBy('wishlist','value.userName','tom').subscribe(re=>{
      this.wishlist.push(re) 
    console.log(this.wishlist)
    this.getBagDetail()
  
  })
  //this.getBagDetail()
  }
  getBagDetail() {
    this.wishlistBook=[]
    this.wishlist.forEach(element => {
      element.forEach(element => {
        this.bookService.getMethodBy('book', 'id', element.value.bookId).subscribe(re => {
          this.wishlistBook.push(re)       
        })
      })
      console.log(this.wishlistBook)
    })
    
  }
  
  removeBook(id){
    this.bookService.getMethodBy('wishlist','value.bookId',id).subscribe(re=>{
      let docId=re[0].docId
      this.bookService.deleteMethod('wishlist',docId)
      //this.getBagDetail()
    })
  }
}
