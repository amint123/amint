import {AfterViewChecked, Component} from '@angular/core';
import {Form} from '../form';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements AfterViewChecked {
  userData: Form = new Form();

  public isNotPhoneNumber = false;

  constructor(private router: Router ) {
    if (localStorage.getItem('userData')) {
      this.userData = JSON.parse(localStorage.getItem('userData'));
    }
  }

  ngAfterViewChecked() {
  }

  public onSubmit() {
    const userData = JSON.stringify(this.userData);
    localStorage.setItem('userData', userData);
    this.router.navigate(['/detail/view']);
  }

  public onCancel() {
    const userData = JSON.stringify(this.userData);
    localStorage.key(0);
    this.router.navigate(['index']);
  }


  public onPhoneInputKeyUp(event: any) {
    this.isNotPhoneNumber = !this.isPhoneAvailable(event.target.value);
  }

  private isPhoneAvailable(value: string) {
    const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(value)) {
      return false;
    } else {
      return true;
    }
  }
}
