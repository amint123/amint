import {Pipe, PipeTransform} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Pipe({
  name: 'moneyChange'
})
export class MoneyChangePipe implements PipeTransform {

  transform(value: string): any {
    if (isNullOrUndefined(value)) {
      return;
    }
    const numberValue = parseFloat(value);
    // 汉字的数字
    const nums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
    // 基本单位
    const nuit = new Array('', '拾', '佰');
    // 对应小数部分单位
    const point = new Array('角', '分');
    // 整数金额时后面跟的字符
    const integer = '整';
    // 整型完以后的单位
    const last = '元';
    // 最大处理的数字
    const maxNum = 999.99;
    // 金额整数部分
    let integerNum;
    // 金额小数部分
    let decimalNum;
    // 输出的中文金额字符串
    let chineseStr = '';
    // 分离金额后用的数组，预定义
    let parts;
    if (numberValue > maxNum) {
      // 超出最大处理数字
      return '';
    }
    if (numberValue === 0) {
      chineseStr = nums[0] + last + integer;
      return chineseStr;
    }
    // 转换为字符串
    value = value.toString();
    if (value.indexOf('.') === -1) {
      integerNum = value;
      decimalNum = '';
    } else {
      parts = value.split('.');
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 4);
    }
    // 获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
      let zeroCount = 0;
      let intLen = integerNum.length;
      for (let i = 0; i < intLen; i++) {
        let n = integerNum.substr(i, 1);
        let p = intLen - i - 1;
        let q = p / 4;
        let m = p % 4;
        if (n === '0') {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            chineseStr += nums[0];
          }
          // 归零
          zeroCount = 0;
          chineseStr += nums[ parseInt(n)] + nuit[m];
        }
      }
      chineseStr += last;
    }
    // 小数部分
    if (decimalNum !== '') {
      let decLen = decimalNum.length;
      for (let i = 0; i < decLen; i++) {
        let n = decimalNum.substr(i, 1);
        if (n !== '0') {
          chineseStr += nums[Number(n)] + point[i];
        }
      }
    }
    if (chineseStr === '') {
      chineseStr += nums[0] + last + integer;
    } else if (decimalNum === '') {
      chineseStr += integer;
    }
    return chineseStr;
  }
}
