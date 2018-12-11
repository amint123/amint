import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageFormComponent } from './manage-form/manage-form.component';
import { ManageEditComponent } from './manage-edit/manage-edit.component';

@NgModule({
  declarations: [AdminDashboardComponent, AdminComponent, ManageFormComponent, ManageEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
