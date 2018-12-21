import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LinkListComponent} from './link-list/link-list.component';
import {LinkCreateComponent} from './link-create/link-create.component';
import {LinkHistoryComponent} from './link-history/link-history.component';

const routes: Routes = [
  {path: '', component: LinkListComponent, children: [
    {path: '', redirectTo: 'create', pathMatch: 'full'},
    {path: 'create', component: LinkCreateComponent},
    {path: 'history', component: LinkHistoryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkRoutingModule { }
