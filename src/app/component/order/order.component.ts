import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { FirebaseCrudService } from 'src/app/service/firebase/firebase-crud.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(public bookService: FirebaseCrudService) { }
booka=[]
book=[]
  ngOnInit(): void {
    this.bookService.getAllMethod('order').subscribe(re=>{
      this.booka.push(re)
     // console.log(this.booka)
      this.booka.forEach(element=>{
        element.forEach(element => {
          this.book.push(element.value)
          console.log(this.book)
        });
      })
      
     
    }) 
  }
}
