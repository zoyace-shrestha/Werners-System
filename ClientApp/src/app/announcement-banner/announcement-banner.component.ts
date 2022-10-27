import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, {Autoplay, SwiperOptions, Keyboard, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { AutoplayOptions } from 'swiper/types';
import { Announcement } from '../announcement';
import { AnnouncementCardComponent } from '../announcement-card/announcement-card.component';

SwiperCore.use([Autoplay, Keyboard, Pagination]);

@Component({
  selector: 'app-announcement-banner',
  templateUrl: './announcement-banner.component.html',
  styleUrls: ['./announcement-banner.component.css'],
})

export class AnnouncementBannerComponent implements OnInit {

  @ViewChild('swiperSlideShow') swiperSlideShow!: SwiperComponent;
  // autoplayOptions: AutoplayOptions = {
  //   // delay: 3000,
  //   disableOnInteraction: false,
  //   stopOnLastSlide: true,
  // };
  config: SwiperOptions = {
    slidesPerView: 1,
    // autoplay: this.autoplayOptions,
    keyboard: true,
    pagination: true,
  };



  onSlideChange() {
    console.log('slide change');
  }

  gen(): Array<Announcement> {
    let ret = Array<Announcement>()

    for(let i = 0; i < 2; i++) {
      let temp: Announcement = {
        id: 1,
        title: "2022 June Associate Recognition Ceremony",
        description: "Werner was pleased to recognize four professional drivers: David C, Robert L, Daniel P, and Raymond W. Werner was pleased to recognize four professional drivers: David C, Robw",
        type: "Werner News",
        link: "Link",
        background: "primary",
        publishDate: new Date(),
        expirationDate: new Date(),
        isDraft: false
      }
      ret.push(temp)
    }
    return ret;
  }

  announcementList?: Array<Announcement>

  constructor() { }

  ngOnInit(): void {
    setTimeout( () => {
      this.announcementList = this.gen();
      this.swiperSlideShow.swiperRef.autoplay.start(); 
      // console.log(this.swiperSlideShow.swiperRef)
    }
  , 1000);
  }

}
