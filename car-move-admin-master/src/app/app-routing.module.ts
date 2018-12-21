import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NotImplementComponent} from './share/components/not-implement/not-implement.component';
import {LoginListComponent} from './login/login-list/login-list.component';
import {UnLoginGuard} from './login/un-login.guard';

const routes: Routes = <Routes> [
  /*{path: 'login', component: NotImplementComponent},
  {
    path: '', component: AppComponent, children: [
      {path: '', redirectTo: '/main', pathMatch: 'full'},
      {
        path: 'main',
        component: HomeComponent,
        data: { breadcrumb: 'Display Name'}
      },
      {
        path: 'link',
        component: NotImplementComponent,
      },
      {
        path: 'management',
        component: NotImplementComponent,
      },
      {path: '**', redirectTo: '/main/home', pathMatch: 'full'},
    ]
  }*/
  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [UnLoginGuard]},
  { path: 'login', component: LoginListComponent, canActivate: [UnLoginGuard]},
  { path: 'main', component: AppComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: './home/home.module#HomeModule'},
      {path: 'link', loadChildren: './link/link.module#LinkModule'},
      {path: 'management', loadChildren: './management/management.module#ManagementModule'}
    ]}
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
