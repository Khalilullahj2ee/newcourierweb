import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/adminlayout/dashboard/dashboard.component';
import { LoginComponent } from './components/adminlayout/login/login.component';
import { SignupComponent } from './components/adminlayout/signup/signup.component';
import { NeworderComponent } from './components/neworder/neworder.component';
import { OrderlistComponent } from './components/neworder/orderlist/orderlist.component';
import { OrderTrackingComponent } from './components/order-tracking/order-tracking.component';
import { AdminlayoutComponent } from './conponents/adminlayout/adminlayout.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { HomeComponent } from './user/home/home.component';


const routes: Routes = [
   
  //{ path: "", component: UserInterfaceComponent },
  // { path: "", component:HomeComponent },
  // { path: "login", component: LoginComponent },
  // { path: "orderTrack", component: OrderTrackingComponent},
  // { path: "sign", component: SignupComponent },

  {
    path: "", component:  HomeComponent, children: [ 
      { path: "", component: UserInterfaceComponent},
      { path: "orderTrack", component: OrderTrackingComponent},
    ]
  },
  { path: "adminlogin", component: LoginComponent },
  {
    path: "admin", component: AdminlayoutComponent,  children: [
     
      { path: "", component: DashboardComponent },
      { path: "order", component: NeworderComponent },
      { path: "orderlist", component: OrderlistComponent},
      { path: "orderTrack", component: OrderTrackingComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
