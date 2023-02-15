import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  router: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      const email=localStorage.getItem('email');
      const password=localStorage.getItem('password');
      if(email==='archana@gmail.com'&& password==='12345678')
      {
        return true;
      }else{
        this.router.navigateByUrl('/login');
        return false
      }

    }
    
  }
  
  

