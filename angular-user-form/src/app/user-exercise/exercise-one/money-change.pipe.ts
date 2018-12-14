import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Pipe({
  name: 'moneyChange'
})
export class MoneyChangePipe implements PipeTransform {

  transform(value: any): any {
    const chinese = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const unit1  = ['', '什', '佰'];
    const unit2 = ['角', '分'];
    const unit3 = '元';
    const full = '整';
    const maxNum = 999.99;
    let integerNum;   // 整数
    let decimalNum;   // 小数
    let str = '';
    let partsArr;
    if (value > maxNum) {
      return;
    }
    if (value === 0) {
      str = chinese[0] + unit3;
      return str;
    }
    if (isNullOrUndefined(value)) {
      return;
    }
    value = value.toString();
    if (value.indexOf('.') === -1) {
      integerNum = value;
      decimalNum = '';
    } else {
      partsArr = value.split('.');
      integerNum = partsArr[0]; // 数组第一个元素为整数
      decimalNum = partsArr[1].substring(0, 4);
    }
    if (parseInt(integerNum, 10) > 0) {
      let zeroCount = 0;
      for (let i = 0; i < integerNum.length; i++) {
        const n = integerNum.substr(i, 1);
        const p = integerNum.length - i - 1;
        const m = p % 4;
        if (n === '0') {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            str += chinese[0];
          }
          zeroCount = 0;
          str += chinese[parseInt(n, null)] + unit1[m];
        }
      }
      str += unit3;
    }
    if (decimalNum !== '') {
      const decLen = decimalNum.length;
      for (let i = 0; i < decLen; i++) {
        const n = decimalNum.substr(i, 1);
        if (n !== '0') {
          str += chinese[Number(n)] + unit2[i];
        }
      }
    }
    if (str === '') {
      str += chinese[0] + unit3 + full;
    } else if (decimalNum === '') {
      str += full;
    }
    return str;
  }
}
