import { Component, OnInit , OnDestroy} from '@angular/core';
import {interval, Subscription} from 'rxjs/index';

@Component({
  selector: 'app-three-current',
  templateUrl: './three-current.component.html',
  styleUrls: ['./three-current.component.css']
})
export class ThreeCurrentComponent implements OnInit , OnDestroy {
  private secondCouter: Subscription ;
  public date = new Date() ;
  constructor() { }
  ngOnInit() {
    this.secondCouter =  interval(1000).subscribe(n => this.date = new Date);
  }
  ngOnDestroy(): void {
    this.secondCouter.unsubscribe();
  }
}
