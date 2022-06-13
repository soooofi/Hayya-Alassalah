import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimingsPageRoutingModule } from './timings-routing.module';

import { TimingsPage } from './timings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimingsPageRoutingModule
  ],
  declarations: [TimingsPage]
})
export class TimingsPageModule {}
