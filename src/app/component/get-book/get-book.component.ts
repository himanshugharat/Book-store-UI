import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedService } from 'src/app/service/shared/shared.service';

interface bookBy {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.scss']
})


export class GetBookComponent implements OnInit {
  constructor(public bookservice: FirebaseCrudService,public shared:SharedService) { }
  book = []
  sortType
  //dataa
  dataa
  page: number = 1;
  ngOnInit(): void {
    this.getData() 
  }
  selectChange(val) {
    switch (val) {
      case 'author-1': {
        this.book.sort((a, b) => { if (a.author < b.author) { return -1 } if (a.author > b.author) { return 1 } return 0 })
        console.log(this.book)
        break;
      }
      case 'price-2': {
        this.book.sort((a, b) => { if (a.price < b.price) { return -1 } if (a.price > b.price) { return 1 } return 0 })
        console.log(this.book)
        break;
      }
      case 'title-0': {
        this.book.sort((a, b) => { if (a.title < b.title) { return -1 } if (a.title > b.title) { return 1 } return 0 })
        console.log(this.book)
        break;
      }
    }
  }
  getData() {
    this.bookservice.getAllMethod('book').subscribe(re => {
      re.forEach(book => this.book.push(book))
    })
    this.shared.data.subscribe(data=>{this.dataa=data})
  }
  
  data: bookBy[] = [
    { value: 'title-0', viewValue: 'sort by title' },
    { value: 'author-1', viewValue: 'sort by author' },
    { value: 'price-2', viewValue: 'sort by price' }
  ];
  review() {
    return Math.floor(Math.random() * (5 - 1) + 1)

  }
}
