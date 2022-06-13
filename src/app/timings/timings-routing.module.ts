import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimingsPage } from './timings.page';

const routes: Routes = [
  {
    path: '',
    component: TimingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimingsPageRoutingModule {}
