import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/adminlayout/dashboard/dashboard.component';
import { LoginComponent } from './components/adminlayout/login/login.component';
import { SignupComponent } from './components/adminlayout/signup/signup.component';
import { NeworderComponent } from './components/neworder/neworder.component';
import { AdminlayoutComponent } from './conponents/adminlayout/adminlayout.component';


const routes: Routes = [
   

  { path: "", component: LoginComponent },
  { path: "sign", component: SignupComponent },
  {
    path: "admin", component: AdminlayoutComponent, children: [
      { path: "", component: DashboardComponent },
      { path: "order", component: NeworderComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
