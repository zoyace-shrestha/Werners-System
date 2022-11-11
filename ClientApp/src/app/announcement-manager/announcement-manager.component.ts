import { Component, OnInit } from '@angular/core';
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
    this.bannerService.getActive().subscribe(banners => this.announcements = banners);
  }

}
