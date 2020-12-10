import { Component, OnInit } from '@angular/core';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(public bookService: FirebaseCrudService) { }
  bookdata = []
  book = []
  ngOnInit(): void {
    this.bookService.getAllMethod('order').subscribe(re => {
      this.bookdata.push(re)
      this.bookdata.forEach(element => {
        element.forEach(element => {
          this.book.push(element.value)
        });
      })
    })
  }
}
