import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { orderModel } from './orderModel';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  orderList: any
  order: orderModel = new orderModel()


  ngOnInit(): void {
    this.getOrders()
  }

  
  getOrders(){
    const headers   = { 'content-type': 'application/json' }
    this.http.get<any>("http://localhost:9091/order/orderList", {headers: headers})
    .subscribe(map=>{
      console.log(map.data);
      this.orderList = map.data
    })
  }


  editOrder(ords:any){
    //this.order = ords.trackingNum
    this.order.senderName = ords.senderName
    this.order.senderEmail = ords.senderEmail
    this.order.senderPhone = ords.senderPhone
    this.order.senderAddress = ords.senderAddress
    this.order.docType = ords.docType
    this.order.contents = ords.contents
    this.order.weight = ords.weight
    this.order.amount = ords.amount
    this.order.receiveName = ords.receiveName
    this.order.receiveEmail = ords.receiveEmail
    this.order.receiverPhon = ords.receiverPhon
    this.order.receiverAddress = ords.receiverAddress
    this.order.status = ords.status
    this.order.orderDate = ords.orderDate 
    console.log(this.order);

    this.router.navigate(["/admin/order"], {state:{ords: orderModel, isSave: false}})
    

  }
}
