import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {}
} 

@Component({
  selector: 'date-pipe',
  template: `<div>
   <p>Today is {{today | date}}</p>
   <p>Or if you prefer, {{today | date:'fullDate'}}</p>
   <p>The time is {{today | date:'h:mm a z'}}</p>
 </div>`
 
 
 })
 // Get the current date and time as a date-time value.
 export class DatePipeComponent {
   today: number = Date.now();
 }
