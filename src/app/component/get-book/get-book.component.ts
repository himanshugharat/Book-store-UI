import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';
import { MatPaginatorModule } from '@angular/material/paginator';

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

  constructor(public bookservice: FirebaseCrudService) { }
  book = []
  page: number = 1;
  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.bookservice.getUser('book').subscribe(re => {
      re.forEach(book => this.book.push(book))
    })
    console.log(this.book)

  }
  data: bookBy[] = [
    { value: 'title-0', viewValue: 'sort by title' },
    { value: 'author-1', viewValue: 'sort by author' },
    { value: 'price-2', viewValue: 'sort by price' }
  ];
}
