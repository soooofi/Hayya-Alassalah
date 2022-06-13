import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlyPageRoutingModule } from './monthly-routing.module';

import { MonthlyPage } from './monthly.page';
import { DataService } from 'src/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlyPageRoutingModule
  ],
  declarations: [MonthlyPage],
  providers: [DataService]
})
export class MonthlyPageModule {}
