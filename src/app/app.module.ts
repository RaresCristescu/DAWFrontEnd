import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
// import { ComunicationComponents } from './pages/page2/page2.component';
// import { Component1Component } from './shared/components/component1/component1.component';
// import { Component2Component } from './shared/components/component2/component2.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { Page3Component } from './pages/page3/page3.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ImagePreloaderDirective } from './core/directives/ImagePreloader.directive';
import { DemoPipe } from './core/pipe/demo.pipe';
import {JwtModule} from '@auth0/angular-jwt';
import {environment} from "../environments/environment";
import {ErrorInterceptor} from "./core/interceptors/error-interceptor";
import {Page2serviceService} from "./core/services/page2services/page2service.service";
import {ComponentsModule} from "./shared/components/components.module";
import {MatCardModule} from '@angular/material/card';
import { ParentComponent } from './shared/comunicationComponents/parent/parent.component';
import { ChildComponent } from './shared/comunicationComponents/child/child.component';
import { Component1comComponent } from './shared/comunicationComponents/component1com/component1com.component';
import { Component2comComponent } from './shared/comunicationComponents/component2com/component2com.component';
import { ModalContainerComponent } from './modals/modal-container/modal-container.component';
import { Modal1Component } from './modals/modal1/modal1.component';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/home/login/login.component';
import {JwtInterceptor} from "./core/interceptors/jwt.interceptor";
import { AdminComponent } from './admin/admin.component';


export function tokenGetter(){
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Page1Component,
    Page2Component,
    // Component1Component,
    // Component2Component,
    AdminLayoutComponent,
    Page3Component,
    RegisterComponent,
    ImagePreloaderDirective,
    DemoPipe,
    ParentComponent,
    ChildComponent,
    Component1comComponent,
    Component2comComponent,
    ModalContainerComponent,
    Modal1Component,
    HomeComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    ComponentsModule,
    MatCardModule,

    JwtModule.forRoot({
      config:{
        tokenGetter,
        allowedDomains:['domain:4200 ',environment.apiUrl]
      }
    })
  ],
  providers: [
    Page2serviceService,
    {provide: HTTP_INTERCEPTORS, useClass:ErrorInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass:JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
