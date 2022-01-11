import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NeworderComponent implements OnInit {

  fg = new FormGroup({
tNumber: new FormControl("",Validators.required),
name: new FormControl("",Validators.required)

    
  })


  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.fg.get("tNumber")?.value);
    console.log(this.fg.get('name')?.value); 
    
    
  }
 
  
}
