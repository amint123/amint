import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserFormComponent} from './user-form/user-form.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import {UserIndexComponent} from './user-index/user-index.component';
import {UnLoginGuard} from './user-edit/un-login.guard';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: UserIndexComponent},
  {
    path: 'detail', component: DetailComponent, children: [
    {path: 'add', component: UserFormComponent, canActivate: [UnLoginGuard]},
    {path: 'update', component: UserFormComponent, canActivate: [UnLoginGuard]},
    {path: 'view', component: UserEditComponent, canActivate: [UnLoginGuard]},
  ]
  },
  {path: '**', redirectTo: 'index'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
