import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserIndexComponent } from './user-index/user-index.component';
import {CanActivate, RouterModule, Routes} from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { UserExerciseComponent } from './user-exercise/user-exercise.component';
import { ExerciseOneComponent } from './user-exercise/exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './user-exercise/exercise-two/exercise-two.component';
import { UnDateGuard} from './user-exercise/un-date.guard';
import { UnLoginGuard} from './user-edit/un-login.guard';
import { MoneyChangePipe} from './user-exercise/exercise-one/money-change.pipe';
import { ExerciseThreeComponent } from './user-exercise/exercise-three/exercise-three.component';
import { ThreeCurrentComponent } from './user-exercise/exercise-three/three-current/three-current.component';
import { ThreeSecondComponent } from './user-exercise/exercise-three/three-second/three-second.component';
import {GlobalMoodService} from './user-exercise/global-mood.service';
import {MomentMoodService} from './user-exercise/moment-mood.service';
import { ExerciseFourComponent } from './user-exercise/exercise-four/exercise-four.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserEditComponent,
    UserIndexComponent,
    DetailComponent,
    UserExerciseComponent,
    ExerciseOneComponent,
    ExerciseTwoComponent,
    MoneyChangePipe,
    ExerciseThreeComponent,
    ThreeCurrentComponent,
    ThreeSecondComponent,
    ExerciseFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [GlobalMoodService, MomentMoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
