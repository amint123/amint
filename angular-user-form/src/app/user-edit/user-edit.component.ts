import {Component, Input} from '@angular/core';
import { Form} from '../form';
import { Router } from '@angular/router';
import {CanActivate} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent  {
  public userData: Form = new Form();
  constructor (private router: Router) {
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }
  public onUpdate() {
    this.router.navigate(['/detail/update']);
  }
  public newUser() {
    localStorage.clear();
     this.router.navigate(['/detail/add']);
   }
}
