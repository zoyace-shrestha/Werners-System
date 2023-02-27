import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, {Autoplay, SwiperOptions, Keyboard, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { AutoplayOptions } from 'swiper/types';
import { Announcement } from '../announcement';
import { BannerService } from '../banner.service';
import { ToastController } from '@ionic/angular';
import { toast } from '../toasthelper';

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

  constructor(private bannerService: BannerService, private toastController: ToastController,) { }

  ngOnInit(): void {
    this.bannerService.getActivePublished().subscribe({next: banners => {
      this.announcementList = banners;
      setTimeout(() => {
        this.swiperSlideShow.swiperRef.autoplay.start(); 
      }, 500)
    }, error: error => toast('danger','Failed to retrieve announcements', this.toastController)});
  }
}
