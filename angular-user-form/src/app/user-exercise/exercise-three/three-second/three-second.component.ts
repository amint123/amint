import { Component, OnInit } from '@angular/core';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-three-second',
  templateUrl: './three-second.component.html',
  styleUrls: ['./three-second.component.css']
})
export class ThreeSecondComponent implements OnInit {
  constructor(public counter: CounterService) { }
  ngOnInit() {
  }
}
