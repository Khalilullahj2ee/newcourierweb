import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { orderModel } from '../neworder/orderlist/orderModel';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
export class OrderTrackingComponent implements OnInit {

  order = new orderModel()
  trackingNum = ''
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }

  searchByTrackingNumber() {
    this.http.get<any>("http://localhost:9091/search/" + this.trackingNum).subscribe(res => {
      this.order = res.data
      console.log(res);


    })
  }


}
