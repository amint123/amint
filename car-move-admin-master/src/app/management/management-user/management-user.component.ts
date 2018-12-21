import { Component, OnInit } from '@angular/core';
import {ManagementUserService} from '../../management-user.service';

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.less']
})
export class ManagementUserComponent implements OnInit {
  size = 'large';
  public UserData = [];
  public inTel = '';
  public inLicense = '';
  public inputState = '';
  public inputTime = '';
  public handle = '加入黑名单'
  constructor(private UserDataService: ManagementUserService) { }

  ngOnInit() {
    this.UserData = this.UserDataService.UserData;
  }
  onCheckUser() {
    this.UserData = [];
    this.UserDataService.UserData.forEach(item => {
      const telIndex = item.tel.indexOf(this.inTel);
      const licIndex = item.license.indexOf(this.inLicense);
      const stateIndex = item.state.indexOf(this.inputState);
      const timeIndex = item.time.indexOf(this.inputTime);
      if (telIndex > -1 && licIndex > -1 && stateIndex > -1 && timeIndex > -1) {
        this.UserData.push(item);
      }
    });
  }
  onClear() {
    this.inTel = '';
    this.inLicense = '';
    this.inputState = '';
    this.inputTime = '';
    this.UserData = this.UserDataService.UserData;
  }
  onChangeState(event) {
    this.UserDataService.UserData.forEach(item => {
      if (event === item.license) {
        if (item.state === '正常') {
          item.state = '黑名单';
          item.handle = '移除黑名单' ;
        } else {
          item.state = '正常';
          item.handle = '加入黑名单';
        }
      }
    });
  }
}
