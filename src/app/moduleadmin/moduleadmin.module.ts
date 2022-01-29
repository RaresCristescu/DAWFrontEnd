import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleadminRoutingModule } from './moduleadmin-routing.module';
import { ModuleadminComponent } from './moduleadmin.component';
import { AdminComponent1Component } from './admin-component1/admin-component1.component';


@NgModule({
  declarations: [
    ModuleadminComponent,
    AdminComponent1Component
  ],
  imports: [
    CommonModule,
    ModuleadminRoutingModule
  ]
})
export class ModuleadminModule { }
