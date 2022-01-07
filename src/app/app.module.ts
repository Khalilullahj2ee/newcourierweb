import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminlayoutComponent } from './conponents/adminlayout/adminlayout.component';
import { AdminheaderComponent } from './components/adminlayout/adminheader/adminheader.component';
import { LoginComponent } from './components/adminlayout/login/login.component';
import { DashboardComponent } from './components/adminlayout/dashboard/dashboard.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/adminlayout/signup/signup.component';
=======
import { AdminloginComponent } from './adminlogin/adminlogin.component';
>>>>>>> d34c5cd2586ee13620e5308fde170370686f4218

@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    LoginComponent,
    DashboardComponent,
<<<<<<< HEAD
    SignupComponent
=======
    AdminloginComponent
>>>>>>> d34c5cd2586ee13620e5308fde170370686f4218
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
