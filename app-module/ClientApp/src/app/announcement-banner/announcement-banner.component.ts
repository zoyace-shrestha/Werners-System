import { Component, OnInit, ViewChild } from '@angular/core';
import SwiperCore, {Autoplay, SwiperOptions, Keyboard, Pagination } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { AutoplayOptions } from 'swiper/types';
import { Announcement, blankAnnouncement } from '../announcement';
import { BannerService } from '../banner.service';
import { ToastController } from '@ionic/angular';
import { toast } from '../toasthelper';
import { SignalrService } from '../signalr.service';
import { Subscription } from 'rxjs';
import { BroadcastType, SignalRAnnouncementBroadcast } from '../signalRAnnouncementBroadcast';


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
  announcementSubscription: any;

  constructor(private bannerService: BannerService, private toastController: ToastController, private signalrService: SignalrService) { }

  ngOnInit(): void {

    this.signalrService.startConnection().then(() => {
      console.log("connected");

      // 2 - register for relay
      this.signalrService.listenToAnnouncement();

      // 3 - subscribe to messages received
      this.announcementSubscription = this.signalrService.AnnouncementObservable
        .subscribe((res: SignalRAnnouncementBroadcast) => {
          // Handle SignalR broadcast messages
          if (res.broadcastType == BroadcastType.Create) {
            addAnnouncementToList(res.announcement);
            // Not sure if this needs to be put in a try / catch, but the app crashes on initial swiper start if not placed in a timeout
            try {
              this.swiperSlideShow.swiperRef.autoplay.start();
            } catch (e) {
              throw e;
            }
          } else if (res.broadcastType == BroadcastType.Update) {
            updateAnnouncementInList(res.announcement);
          } else if (res.broadcastType == BroadcastType.Delete) {
            removeAnnouncementFromList(res.announcement);
          }

        });
    });

    let addAnnouncementToList = (announcement: Announcement) => {
      this.announcementList.push(announcement);
    }

    let removeAnnouncementFromList = (announcement: Announcement) => {
      this.announcementList.forEach((item, index) => {
        if (item.idAnnouncements === announcement.idAnnouncements) this.announcementList.splice(index, 1);
      })
    }

    let updateAnnouncementInList = (announcement: Announcement) => {
      let index = this.announcementList.findIndex(item => item.idAnnouncements === announcement.idAnnouncements);
      this.announcementList[index] = announcement;
    }

    this.bannerService.getActivePublished().subscribe({next: banners => {
      this.announcementList = banners;
      setTimeout(() => {
        this.swiperSlideShow.swiperRef.autoplay.start(); 
      }, 500)
    }, error: error => toast('danger','Failed to retrieve announcements', this.toastController)});
  }

  ngOnDestroy(): void {
    (<Subscription>this.announcementSubscription).unsubscribe();
  }

}
