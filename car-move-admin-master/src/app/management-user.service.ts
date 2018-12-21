import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagementUserService {
  constructor() { }
  UserData = [
    {'time': '2018-08-19 14:48', 'tel': '17665456666', 'license': '辽A12323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 14:48', 'tel': '17666234125', 'license': '辽B12323', 'state': '黑名单', 'handle': '移除黑名单'},
    {'time': '2018-08-19 14:48', 'tel': '17543555666', 'license': '辽C12323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 14:48', 'tel': '12155566666', 'license': '辽D12323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-11 14:48', 'tel': '17675666666', 'license': '辽E12323', 'state': '黑名单', 'handle': '移除黑名单'},
    {'time': '2018-08-19 14:48', 'tel': '19767666666', 'license': '辽F12323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2017-05-19 14:48', 'tel': '17666666768', 'license': '辽A32356', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-05-19 14:48', 'tel': '17666663436', 'license': '辽A42326', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 14:48', 'tel': '17666666666', 'license': '辽A52325', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-09 14:48', 'tel': '17666666666', 'license': '辽A62328', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-09 14:48', 'tel': '17666666666', 'license': '辽A72323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 13:48', 'tel': '17663131346', 'license': '辽A82323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 11:48', 'tel': '17666666666', 'license': '辽A92323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 04:48', 'tel': '17666666666', 'license': '辽A23323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 14:48', 'tel': '17666666666', 'license': '辽A14323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 14:48', 'tel': '17666666666', 'license': '辽A15323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 14:48', 'tel': '17666666666', 'license': '辽A16323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 14:48', 'tel': '17666666666', 'license': '辽A17323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 14:48', 'tel': '17666666666', 'license': '辽A18323', 'state': '正常', 'handle': '加入黑名单'},
    {'time': '2018-08-19 14:48', 'tel': '17666666666', 'license': '辽A19323', 'state': '正常', 'handle': '加入黑名单'}
  ];
  LinkViewData = [
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
    {'date': '2018/12/15', 'time': '12:25', 'link': 'http://9c.ltd/56w', 'tela': '13252862883',
      'license': '辽A12345', 'telb': '13252862883', 'call': '20分钟' },
  ];
}