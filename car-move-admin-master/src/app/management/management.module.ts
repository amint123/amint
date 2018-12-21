import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementListComponent } from './management-list/management-list.component';
import { ManagementLinkComponent } from './management-link/management-link.component';
import { ManagementUserComponent } from './management-user/management-user.component';
import {ShareModule} from '../share/share.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { LinkViewComponent } from './link-view/link-view.component';

@NgModule({
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ShareModule,
    NgZorroAntdModule
  ],
  declarations: [ManagementListComponent, ManagementLinkComponent, ManagementUserComponent, LinkViewComponent]
})
export class ManagementModule { }
