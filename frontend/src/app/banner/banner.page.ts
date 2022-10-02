import { Component } from '@angular/core';
import SwiperCore, { EffectFade, Swiper } from 'swiper';

// install Swiper modules
//SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.page.html',
  styleUrls: ['banner.page.scss'],
})
export class BannerPage {
  bannerMessages: { id: number; name: string; pictures: string }[] = [
    { id: 0, name: 'Available', pictures: 'assets/pictures/truck.jpg' },
    { id: 1, name: 'Ready', pictures: 'assets/pictures/truck.jpg' },
    { id: 2, name: 'Started', pictures: 'assets/pictures/truck.jpg' },
  ];
  //bannerMessages: Array<string> = ['Apple', 'Orange', 'Banana'];
  //bannerMessages = [];
  constructor() {}
  // ngOnInit() {
  //fetch from data base.
  // }
}
