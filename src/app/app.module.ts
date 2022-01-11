import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminlayoutComponent } from './conponents/adminlayout/adminlayout.component';
import { AdminheaderComponent } from './components/adminlayout/adminheader/adminheader.component';
import { LoginComponent } from './components/adminlayout/login/login.component';
import { DashboardComponent } from './components/adminlayout/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/adminlayout/signup/signup.component';
import { NeworderComponent } from './components/neworder/neworder.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    LoginComponent,
    DashboardComponent,
    NeworderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
