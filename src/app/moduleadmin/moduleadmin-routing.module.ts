import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleadminComponent } from './moduleadmin.component';

const routes: Routes = [{ path: '', component: ModuleadminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleadminRoutingModule { }
