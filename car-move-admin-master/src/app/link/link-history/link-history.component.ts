import { Component, OnInit } from '@angular/core';
import {ManagementLinkService} from '../../management-link.service';

@Component({
  selector: 'app-link-history',
  templateUrl: './link-history.component.html',
  styleUrls: ['./link-history.component.less']
})
export class LinkHistoryComponent implements OnInit {
  sortName = null;
  sortValue = null;
  listOfSearchName = [];
  searchAddress: string;
  public LinkHistoty = [];
  constructor(private LinkService: ManagementLinkService) { }
  ngOnInit() {
    this.LinkHistoty = this.LinkService.LinkHistory;
  }
   /*sort(sort: {key: string, value: string}): void {
     this.sortName = sort.key;
     this.sortValue = sort.value;
   }*/
  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    this.listOfSearchName = listOfSearchName;
    this.searchAddress = searchAddress;
    this.search();
  }

  search(): void {
    /** filter data **/
    const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) &&
      (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.LinkHistoty.filter(item => filterFunc(item));
    /** sort data **/
    if (this.sortName && this.sortValue) {
      this.LinkHistoty = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) :
        (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.LinkHistoty = data;
    }
  }
}
