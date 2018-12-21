import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManagementListComponent} from './management-list/management-list.component';
import {ManagementLinkComponent} from './management-link/management-link.component';
import {ManagementUserComponent} from './management-user/management-user.component';
import {LinkViewComponent} from './link-view/link-view.component';

const routes: Routes = [
  {path: '', component: ManagementListComponent, children: [
    {path: '', redirectTo: 'mlink', pathMatch: 'full'},
    {path: 'mlink', component: ManagementLinkComponent},
    {path: 'muser', component: ManagementUserComponent},
    {path: 'linkView', component: LinkViewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
