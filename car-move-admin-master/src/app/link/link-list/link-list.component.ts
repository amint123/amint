import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.less']
})
export class LinkListComponent implements OnInit {
  openMap = {
    sub1: true,
  };
  constructor(private router: Router) { }
  ngOnInit() {
  }
  onCreate() {
    this.router.navigate(['main/link/create']);
  }
  onHistory() {
    this.router.navigate(['main/link/history']);
  }
}
