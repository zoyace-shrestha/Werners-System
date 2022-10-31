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

  gen(): Array<Announcement> {
    let ret = Array<Announcement>()

    for(let i = 0; i < 10; i++) {
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

  ann: Announcement = {
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

  // announcementList?: Array<Announcement>
  announcementList: Array<Announcement> = [
    {
      id: 0,
      type: 'Werner News',
      title: '2022 June Associate Recognition Ceremony',
      link: 'asda',
      description: 'Werner was pleased to recognize four professional drivers: David C, Robert L, Daniel P, and Raymond W. Werner was pleased to recognize four professional drivers: David C, Robw ',
      background: 'primary',
      publishDate: new Date(),
      expirationDate: new Date(),
      isDraft: false
    },
    {
      id: 1,
      type: 'Werner Life',
      title: 'Life on the Road Video Series',
      description: 'The latest episode of Life on the Road is available now!',
      background: 'secondary',
      link: '',
      publishDate: new Date(),
      expirationDate: new Date(),
      isDraft: false
    },
    {
      id: 2,
      type: 'COVID-19 Updates',
      title: 'What Drivers Need to Know About COVID-19',
      description: 'The latest information about COVID- 19',
      background: 'light',
      link: '',
      publishDate: new Date(),
      expirationDate: new Date(),
      isDraft: false
    },
    {
      id: 3,
      type: 'Werner Points',
      title: 'Werner rewards has been added!',
      description: 'Click here to get started! ',
      background: 'success',
      link: '',
      publishDate: new Date(),
      expirationDate: new Date(),
      isDraft: false
    },
    {
      id: 4,
      type: 'COVID-19 Updates',
      title: 'What Drivers Need to Know About COVID-19',
      description: 'The latest information about COVID-19  ',
      background: 'danger',
      link: '',
      publishDate: new Date(),
      expirationDate: new Date(),
      isDraft: false
    },
    {
      id: 5,
      type: 'Get Paid',
      title: '2022 June Associate Recognition Ceremony',
      description:
        'Werner was pleased to recognize four professional drivers: David C, Robert L, Daniel P, and Raymond W. Werner was pleased to recognize four professional drivers: David C, Robw',
        background: 'tertiary',
        link: '',
        publishDate: new Date(),
        expirationDate: new Date(),
        isDraft: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout( () => {
      // this.announcementList = this.gen();
      this.swiperSlideShow.swiperRef.autoplay.start(); 
      // console.log(this.swiperSlideShow.swiperRef)
    }
  , 1000);
  }

}
