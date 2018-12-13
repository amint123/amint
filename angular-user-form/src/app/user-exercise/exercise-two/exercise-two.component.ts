import {Component, OnInit, OnDestroy} from '@angular/core';
import {MomentMoodService} from '../moment-mood.service';
import {GlobalMoodService} from '../global-mood.service';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css'],
  providers: [MomentMoodService]
})
export class ExerciseTwoComponent implements OnInit {

  constructor(public momentService: MomentMoodService, public globalService: GlobalMoodService) {
  }

  onGlobal() {
    this.globalService.generateGlobalMood();
  }

  onMoment() {
    this.momentService.generateMomentMood();
  }

  ngOnInit() {
  }
}
