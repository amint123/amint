import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnDateGuard implements CanActivate {
  canActivate (router: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
      if (localStorage.getItem('userData')) {
        return true;
      } else {
        return false;
      }
  }
}
