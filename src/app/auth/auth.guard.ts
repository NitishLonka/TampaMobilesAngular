import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';
import {Router} from "@angular/router"
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:ProductsService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      if(false
        //!this.service.isLoggedIn()
      ){
        this.router.navigateByUrl('/login')
        this.service.deleteToken()
        return false;
      }
    return true;
  }
  
}
