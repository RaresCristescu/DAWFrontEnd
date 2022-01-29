import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { Component1Component } from './shared/components/component1/component1.component';
import { Component2Component } from './shared/components/component2/component2.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { Page3Component } from './pages/page3/page3.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ImagePreloaderDirective } from './core/directives/ImagePreloader.directive';
import { DemoPipe } from './core/pipe/demo.pipe';
import {JwtModule} from '@auth0/angular-jwt';
import {environment} from "../environments/environment";


export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Page1Component,
    Page2Component,
    Component1Component,
    Component2Component,
    AdminLayoutComponent,
    Page3Component,
    RegisterComponent,
    ImagePreloaderDirective,
    DemoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    JwtModule.forRoot({
      config:{
        tokenGetter,
        allowedDomains:['domain:4200 ',environment.apiUrl]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
