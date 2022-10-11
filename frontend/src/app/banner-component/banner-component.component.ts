import { Component, ViewChild, OnInit  } from '@angular/core';
import SwiperCore, {Autoplay, SwiperOptions, Keyboard} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { AutoplayOptions } from 'swiper/types';
import getTestBanners from '../../services/banner';

SwiperCore.use([Autoplay, Keyboard]);

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.scss'],
})
export class BannerComponentComponent implements OnInit {
  
  @ViewChild('swiperSlideShow') swiperSlideShow!: SwiperComponent;
  autoplayOptions: AutoplayOptions = {
    delay: 3000,
    disableOnInteraction: false,
    stopOnLastSlide: true
    };
  config: SwiperOptions = {
    autoplay: this.autoplayOptions,
    keyboard: true,
    
  };
  bannerMessages: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    backgroundColor: string;
    textColor: string;
    date: Date;
  }[] = new Array();

  public async parseJson(
    json: {
      id: number,
      title: string,
      subtitle: string,
      description: string,
      colorScheme: {
        background: string,
        text: string
      },
      date: Date
    }[]
  ) {
    json.forEach((x) => {
      this.bannerMessages.push({
        id: x.id,
        title: x.title,
        subtitle: x.subtitle,
        description: x.description,
        backgroundColor: x.colorScheme.background,
        textColor: x.colorScheme.text,
        date: x.date,
      });
    });
  }

  constructor() {}

  ngOnInit() {
      getTestBanners().then((json) => {
        this.parseJson(json).then(() => {
          this.swiperSlideShow.swiperRef.autoplay.start();
        });
      })
  }
}