import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from 'ng-starrating';
import { element } from 'protractor';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
 book=[]
 
  // book = {
  //   author: "Stephen King",
  //   description: "In this newly available paperback editionSpignesi selects and ranks the top 101 works out of the more than 550 created by Stephen King during his prolific career. Each chosen work is synopsized and reviewed by the writer who Entertainment Weekly has called the worlds leading expert on Stephen King. Fiction and nonfictionwell known and obscurescary and scarier -- discussions of Kings best short stories novell as screenplays novelses says foreword sarticles introductions and more are all here! From his best-selling novels (The Dead ZoneThe ShiningCarrieThe Green MilePet SemataryItRiding the BulletThe PlantThe Dark Tower seriesInsomnia)to short stories and novellas (Survivor TypeThe Last Rung on the LadderGrammaShawshank Redemption)thought-provoking nonfiction (Danse MacabreOn WritingRemembering JohnMy Little Serrated Security BlanketLeaf-Peepers)...even an amazing column from Kings college newspaper (The Subject This Week is Cops)! The Essential Stephen King provides uncompromising summation and review of Kings work by an acknowledged King authority. It is a must for both the serious and casual fan. Book jacket",
  //   id: 36,
  //   image: "http://books.google.com/books/content?id=OeL8swEACAAJ&printsec=frontcover&img=1&zoom=5",
  //   price: 917,
  //   quantity: 12,
  //   title: "The Essential Stephen King"
  // }
   id:number
  constructor(public bookservice:FirebaseCrudService,public route:ActivatedRoute) {
   
   }

  ngOnInit(): void { 
      this.getData()  
  }
  getData(){
    this.book=[]
    this.id=+this.route.snapshot.paramMap.get('id')
    this.bookservice.getBookById(this.id).subscribe(re=>{
      this.book.push(re)
  })
}
onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
  alert(`Old Value:${$event.oldValue}, 
    New Value: ${$event.newValue}, 
    Checked Color: ${$event.starRating.checkedcolor}, 
    Unchecked Color: ${$event.starRating.uncheckedcolor}`);
}
}
