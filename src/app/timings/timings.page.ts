import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timings', 
  templateUrl: './timings.page.html',
  styleUrls: ['./timings.page.scss'],
  
})
export class TimingsPage implements OnInit {
  currentDate;
  constructor(private router:Router) { }
  
  ngOnInit() {
    this.currentDate= new Date(); 
  }
  monthly() {
    this.router.navigate(['monthly']);
  }
  settings() {
    this.router.navigate(['settings']);
  }
}


