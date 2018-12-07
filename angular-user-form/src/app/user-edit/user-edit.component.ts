import {Component, Input} from '@angular/core';
import { Form} from '../form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  public userData: Form = new Form();
  constructor (private router: Router) {
    if (!localStorage.getItem(('userData'))) {
      this.router.navigate(['/add']);
    } else {
      this.userData = JSON.parse(localStorage.getItem('userData'));
      console.log(this.userData);
    }
  }
  onUpdate() {
    this.router.navigate(['add']);
  }
}
