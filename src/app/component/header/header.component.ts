import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header=new FormGroup({
    dataa:new FormControl()
  })
name
email
  constructor(public route: Router,public shared:SharedService) { }

  ngOnInit(): void {
   this.name=localStorage.getItem('name') 
   this.email=localStorage.getItem('email') 
  }
  search(val){
    console.log(val.dataa) 
    this.shared.change(val.dataa)
  }
  logout() {
    this.route.navigate(['board/login'])
    localStorage.clear()
  }
  
}
