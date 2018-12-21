import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import {ShareModule} from '../share/share.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModule,
    NgZorroAntdModule
  ],
  declarations: [HomeListComponent]
})
export class HomeModule { }
