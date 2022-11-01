import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

import { Announcement } from '../announcement';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-announcement-manager',
  templateUrl: './announcement-manager.component.html',
  styleUrls: ['./announcement-manager.component.css'],
})
export class AnnouncementManagerComponent implements OnInit {

  announcements: Array<Announcement> = [];

  constructor(private bannerService: BannerService) {}

  ngOnInit() {
    this.bannerService.getTestBanners().subscribe(banners => this.announcements = banners);
  }

}
