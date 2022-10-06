import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BannerPage } from './banner.page';
import { BannerPageRoutingModule } from './banner-routing.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BannerPageRoutingModule,
    SwiperModule,
  ],
  declarations: [BannerPage],
})
export class BannerPageModule {}
