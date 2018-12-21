import { Component, OnInit } from '@angular/core';
import { LoginPowerService} from '../../login-power.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.less'],
  providers: [LoginPowerService]
})
export class LoginListComponent implements OnInit {
  public userData = {
    username: '',
    userpassword: '',
  };
  public loginDanger = false;
  constructor(private loginPower: LoginPowerService, private router: Router) {
  }

  ngOnInit() {
  }
  onLoginPower() {
    if (this.userData.username === this.loginPower.LoginInfo.username && this.userData.userpassword
    === this.loginPower.LoginInfo.userpassword) {
      this.loginDanger = false;
       localStorage.setItem('userData', JSON.stringify(this.userData));
      this.router.navigate(['main']);
    } else {
      this.loginDanger = true;
      return false;
    }
  }
}
