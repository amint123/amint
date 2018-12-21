import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginPowerService {
   LoginInfo: any = {
     username: 'admint',
     userpassword: '123456'
   }
  constructor() { }
}
