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
  bannerMessages: { id: number, name: string }[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
];
  //bannerMessages: Array<string> = ['Apple', 'Orange', 'Banana'];
  //bannerMessages = []; 
  constructor() {}
  // ngOnInit() {
  //fetch from data base.
  // }
  
}
