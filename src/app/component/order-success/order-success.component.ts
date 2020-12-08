import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface PeriodicElement {
  email: string;
  contactUs: number;
  address: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { email: "admin@bookstore.com", contactUs: +918163475881, address: "42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034" },
 
];
@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  displayedColumns: string[] = ['email', 'contactUs', 'address'];
  dataSource = ELEMENT_DATA;

}
