import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkRoutingModule } from './link-routing.module';
import { LinkListComponent } from './link-list/link-list.component';
import { LinkHistoryComponent } from './link-history/link-history.component';
import { LinkCreateComponent } from './link-create/link-create.component';
import {ShareModule} from '../share/share.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    LinkRoutingModule,
    ShareModule,
    NgZorroAntdModule
  ],
  declarations: [LinkListComponent, LinkHistoryComponent, LinkCreateComponent]
})
export class LinkModule { }
