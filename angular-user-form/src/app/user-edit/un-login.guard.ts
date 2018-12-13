import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UnLoginGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (state.url === '/detail/add') {
      if (localStorage.getItem('userData')) {
        return false;
      } else {
        return true;
      }
    } else if (state.url === '/detail/view' || state.url === '/detail/update') {
      if (localStorage.getItem('userData')) {
        return true;
      } else {
        return false;
      }
    }
  }
}
