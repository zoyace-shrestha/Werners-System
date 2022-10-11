import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SwiperModule } from 'swiper/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { BannerComponentComponent } from '../banner-component/banner-component.component';
import { MapComponent } from '../map/map.component';
import {BannerEditComponent} from  '../banner-edit-component/banner-edit.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
  ],
  declarations: [HomePage, BannerComponentComponent, MapComponent, BannerEditComponent],
})
export class HomePageModule {}
