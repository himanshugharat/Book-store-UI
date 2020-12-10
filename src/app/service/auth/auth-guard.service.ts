import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public route:Router) { }
  canActivate():boolean {
    let token = localStorage.getItem('token');
    if(token === null || token === undefined){
      this.route.navigate(['board/login'])
      return false;
    }
    return true;
  }
}
