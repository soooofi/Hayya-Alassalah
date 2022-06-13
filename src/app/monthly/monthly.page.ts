import { Component, OnInit } from '@angular/core';
import { doc } from 'firebase/firestore';
import { DataService } from 'src/auth.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.page.html',
  styleUrls: ['./monthly.page.scss'],
})

export class MonthlyPage implements OnInit {
   notes= [];
  constructor(private dataService: DataService) { 

   
  }

  ngOnInit() {
    
    this.dataService.getNotes().subscribe(res => {
      console.log(res);
      this.notes = res;
    })
    
  }
   openNote(note){
     
   }
}



function db(db: any, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}

