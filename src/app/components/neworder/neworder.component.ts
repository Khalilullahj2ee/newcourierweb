import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NeworderComponent implements OnInit {



  fg = new FormGroup({
    trackingNum: new FormControl("", Validators.required),
    senderName: new FormControl("", Validators.required),
    senderEmail: new FormControl("", Validators.required),
    senderPhone: new FormControl("", Validators.required),
    senderAddress: new FormControl("", Validators.required),
    docType: new FormControl("", Validators.required),
    contents: new FormControl("", Validators.required),
    weight: new FormControl("", Validators.required),
    quantity: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    orderDate: new FormControl("", Validators.required),
    receiveName: new FormControl("", Validators.required),
    receiveEmail: new FormControl("", Validators.required),
    receiverPhon: new FormControl("", Validators.required),
    receiverAddress: new FormControl("", Validators.required),
    status: new FormControl("", Validators.required),
  });


  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }


  save() {
    console.log(this.fg.value);
    const header = { 'Content-Type': 'application/json' };

    if (this.fg.valid) {
      this.http.post("http://localhost:9091/order", JSON.stringify(this.fg.value), { headers: header }).subscribe(res => {
        console.log(res);

      })
    } else {
      console.log("invalid form");
    }
  }
}
