import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs/index';

@Component({
  selector: 'app-three-current',
  templateUrl: './three-current.component.html',
  styleUrls: ['./three-current.component.css']
})
export class ThreeCurrentComponent implements OnInit {
  public now ;
  constructor() { }

  ngOnInit() {
    this.now = new Date();
    const secondCouter = interval(1000);
    secondCouter.subscribe(n => this.now = new Date());
  }

}
