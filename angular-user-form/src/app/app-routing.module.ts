import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserFormComponent} from './user-form/user-form.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserIndexComponent} from './user-index/user-index.component';
import {UnLoginGuard} from './user-edit/un-login.guard';
import {UnDateGuard} from './user-exercise/un-date.guard';
import {DetailComponent} from './detail/detail.component';
import {UserExerciseComponent} from './user-exercise/user-exercise.component';
import {ExerciseOneComponent} from './user-exercise/exercise-one/exercise-one.component';
import {ExerciseTwoComponent} from './user-exercise/exercise-two/exercise-two.component';
import {ExerciseThreeComponent} from './user-exercise/exercise-three/exercise-three.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'index', component: UserIndexComponent},
  { path: 'detail', component: DetailComponent, children: [
    { path: 'add', component: UserFormComponent, canActivate: [UnLoginGuard]},
    { path: 'update', component: UserFormComponent, canActivate: [UnLoginGuard]},
    { path: 'view', component: UserEditComponent, canActivate: [UnLoginGuard]},
  ]
  },
  { path: 'exercise', component: UserExerciseComponent, canActivate: [UnDateGuard], children: [
    { path: '', redirectTo: 'one', pathMatch: 'full'},
    { path: 'one', component: ExerciseOneComponent },
    { path: 'two', component: ExerciseTwoComponent },
    { path: 'three', component: ExerciseThreeComponent },
  ]},
  { path: '**', redirectTo: 'index'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
