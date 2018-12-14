import { Injectable } from '@angular/core';
import { Subscription, interval} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }
  public Begin = 'Begin';
  public second = 0;
  public showEnd = true;
  private continueSubscription: Subscription;
    public onBegin() {
    this.showEnd = false;
    if (this.Begin === 'Begin') {
      this.Begin = 'Panse';
      this.continueSubscription = interval(1000).subscribe(() => {
        this.second ++;
      });
    } else if (this.Begin === 'Panse') {
      this.Begin = 'Continue';
      this.continueSubscription.unsubscribe();
    } else if (this.Begin === 'Continue') {
      this.Begin = 'Panse';
      this.continueSubscription = interval(1000).subscribe(() => {
        this.second ++ ;
      });
    }
  }
    public onEnd() {
    this.second = 0;
    this.showEnd = true;
    this.Begin = 'Begin';
    this.continueSubscription.unsubscribe();
  }
}
