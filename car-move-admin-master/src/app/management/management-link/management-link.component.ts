import { Component, OnInit } from '@angular/core';
import {ManagementLinkService} from '../../management-link.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-management-link',
  templateUrl: './management-link.component.html',
  styleUrls: ['./management-link.component.less']
})
export class ManagementLinkComponent implements OnInit {
  size = 'large';
  public linkData = [];
  public inputTel = '';
  public inputLic = '';
  constructor(private dataLink: ManagementLinkService, private router: Router) { }

  ngOnInit() {
    this.linkData = this.dataLink.LinkData;
  }
  onLinkView() {
    this.router.navigate(['main/management/linkView']);
  }
  onCheckLink() {
    this.linkData = [];
    this.dataLink.LinkData.forEach(item => {
      const telIndex = item.tel.indexOf(this.inputTel);
      const licIndex = item.license.indexOf(this.inputLic);
      if (telIndex > -1 && licIndex > -1) {
        this.linkData.push(item);
      }
    } );
  }
  onClear() {
    this.inputLic = '';
    this.inputTel = '';
    this.linkData = this.dataLink.LinkData;
  }
}
