import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wildcard',
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.scss']
})
export class WildcardComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }
  redirect() {
    this.route.navigate(["board/login"])
  }
}
