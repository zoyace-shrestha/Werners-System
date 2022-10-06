import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerPage } from './banner.page';

const routes: Routes = [
  {
    path: '',
    component: BannerPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BannerPageRoutingModule {}
