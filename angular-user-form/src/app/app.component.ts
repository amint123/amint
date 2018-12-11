import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-user-form';

  constructor(private router: Router) {
  }

  public onNavigated() {
    if (localStorage.getItem('userData')) {
      this.router.navigate(['detail/update']);
    } else {
      this.router.navigate(['detail/add']);
    }
  }
}
