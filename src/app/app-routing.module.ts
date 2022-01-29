import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page1Component} from "./pages/page1/page1.component";
import {Page2Component} from "./pages/page2/page2.component";
import {AdminLayoutComponent} from "./layout/admin-layout/admin-layout.component";
import {RegisterComponent} from "./pages/register/register.component";
import {AuthenticateGuard} from "./core/guard/authenticate.guard";
import {ParentComponent} from "./shared/comunicationComponents/parent/parent.component";
import {ChildComponent} from "./shared/comunicationComponents/child/child.component";

const routes: Routes = [
  {
    path:'page1',
    component: Page1Component
  },
  {
    path:'page2',
    component: Page2Component
  },
  {
    path:'admin',
    component: AdminLayoutComponent
  },
  {
    path:'admin/page1',
    component: Page1Component
  },
  {
    path:'register',
    component: RegisterComponent
  },
  { path: 'admin',
    canActivate:[AuthenticateGuard],
    loadChildren: () => import('./moduleadmin/moduleadmin.module').then(m => m.ModuleadminModule)
  },
  {
    path:'comunicationComponents',
    component:ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
