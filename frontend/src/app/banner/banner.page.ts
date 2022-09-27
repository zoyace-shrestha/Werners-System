import { Component } from '@angular/core';
import SwiperCore, { EffectFade, Swiper } from 'swiper';

// install Swiper modules
SwiperCore.use([EffectFade]);

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.page.html',
  styleUrls: ['banner.page.scss'],
})
export class BannerPage {
  constructor() {}
}
