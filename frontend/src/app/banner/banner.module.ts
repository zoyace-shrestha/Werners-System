import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BannerPage } from './banner.page';

import { BannerPageRoutingModule } from './banner-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BannerPageRoutingModule
  ],
  declarations: [BannerPage]
})
export class BannerPageModule {}
