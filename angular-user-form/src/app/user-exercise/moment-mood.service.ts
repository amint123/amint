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
export class MomentMoodService {

  public momentMood = [];
  public count = 0;

  generateMomentMood() {
    const index = Math.floor(Math.random() * 7);
    const moment = CreateMood[index];
    this.momentMood.push(moment);
    this.count++;
  }

  constructor() {
  }
}
