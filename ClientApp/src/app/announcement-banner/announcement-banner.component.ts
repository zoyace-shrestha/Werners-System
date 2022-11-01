import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, {Autoplay, SwiperOptions, Keyboard, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { AutoplayOptions } from 'swiper/types';
import { Announcement } from '../announcement';
import { AnnouncementCardComponent } from '../announcement-card/announcement-card.component';
import { BannerService } from '../banner.service';

SwiperCore.use([Autoplay, Keyboard, Pagination]);

@Component({
  selector: 'app-announcement-banner',
  templateUrl: './announcement-banner.component.html',
  styleUrls: ['./announcement-banner.component.css'],
})

export class AnnouncementBannerComponent implements OnInit {

  @ViewChild('swiperSlideShow') swiperSlideShow!: SwiperComponent;
  autoplayOptions: AutoplayOptions = {
    delay: 3000,
    disableOnInteraction: false,
    stopOnLastSlide: true,
  };
  config: SwiperOptions = {
    slidesPerView: 1,
    autoplay: this.autoplayOptions,
    keyboard: true,
    pagination: true,
  };



  onSlideChange() {
    console.log('slide change');
  }

  announcementList: Array<Announcement> = []

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.getTestBanners().subscribe(banners => {
      this.announcementList = banners;
      setTimeout(() => {
        this.swiperSlideShow.swiperRef.autoplay.start(); 
      }, 500)
    });
  }
}
