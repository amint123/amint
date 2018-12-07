import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Form } from '../form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userData: Form = new Form();
  constructor (
    private router: Router,
  ) {
    if (localStorage.getItem('userData')) {
      this.userData = JSON.parse(localStorage.getItem('userData'));
    }
  }
  submitted = false;
  public onSubmit() {
    const userData = JSON.stringify(this.userData);
    localStorage.setItem('userData', userData);
    this.router.navigate(['']);
  }
}
