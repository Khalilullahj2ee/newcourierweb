import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private rout: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    console.log('loging out');

    this.storageService.logout();
    this.rout.navigateByUrl('/')
  }
}
