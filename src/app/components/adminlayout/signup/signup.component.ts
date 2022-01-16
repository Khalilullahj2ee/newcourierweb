import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 fg = new FormGroup({
  name: new FormControl("", Validators.required),
  username: new FormControl("", Validators.required),
  email: new FormControl("", Validators.required),
  phone: new FormControl("", Validators.required),
  password: new FormControl("", Validators.required),


 })
  constructor(  private http: HttpClient) { }

  ngOnInit(): void {
  }

  signUp(){
    console.log(this.fg.value);
    const header = { 'Content-Type': 'application/json' };

    if (this.fg.valid) {
      this.http.post("http://localhost:9091/user_save", JSON.stringify(this.fg.value), { headers: header }).subscribe(res => {
        console.log(res);

      })
    } else {
      console.log("invalid form");
    }
    
  }

}
