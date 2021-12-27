import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminlayoutComponent } from './conponents/adminlayout/adminlayout.component';
import { AdminheaderComponent } from './components/adminlayout/adminheader/adminheader.component';
import { LoginComponent } from './components/adminlayout/login/login.component';
import { DashboardComponent } from './components/adminlayout/dashboard/dashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    LoginComponent,
    DashboardComponent,
    AdminloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
