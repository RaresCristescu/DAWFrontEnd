import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page1Component} from "./pages/page1/page1.component";
import {Page2Component} from "./pages/page2/page2.component";
import {AdminLayoutComponent} from "./layout/admin-layout/admin-layout.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
