import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-management-list',
  templateUrl: './management-list.component.html',
  styleUrls: ['./management-list.component.less']
})
export class ManagementListComponent implements OnInit {
  openMap = {
    sub1: true,
    sub2: true,
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onMlink() {
    this.router.navigate(['main/management/mlink']);
  }
  onMuser() {
    this.router.navigate(['main/management/muser']);
  }
}
