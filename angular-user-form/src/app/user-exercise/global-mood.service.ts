import {Injectable} from '@angular/core';

const CreateMood = [
  'Sad',
  'Confused',
  'Helpless',
  'Success',
  'Confident',
  'Suprised',
  'Valueable',
  'Relaxed'
];

@Injectable({
  providedIn: 'root'
})
export class GlobalMoodService {

  public globalMood = [];

  generateGlobalMood() {
    const index = Math.floor(Math.random() * 7);
    const glMood = CreateMood[index];
    this.globalMood.push(glMood);
  }

  constructor() {
  }
}

