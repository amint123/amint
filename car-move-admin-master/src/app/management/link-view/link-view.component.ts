import { Component, OnInit } from '@angular/core';
import {ManagementUserService} from '../../management-user.service';

@Component({
  selector: 'app-link-view',
  templateUrl: './link-view.component.html',
  styleUrls: ['./link-view.component.less']
})
export class LinkViewComponent implements OnInit {
  public LinkViewData = [];
  constructor(private UserDataService: ManagementUserService) { }
  ngOnInit() {
    this.LinkViewData = this.UserDataService.LinkViewData;
  }
 /* sortName = null;
  sortValue = null;
  sort(sort: { key: string, value: string}): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search;
  }
  search(): void {
    if (this.sortName && this.sortValue) {
      this.LinkViewData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1)
        : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.LinkViewData = data;
    }
    }*/
}
