import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-announcement-previous',
  templateUrl: './announcement-previous.html',
  styleUrls: ['./announcement-previous.css'],
})
export class AnnouncementPreviousPage {
  
  announcementList: Array<Announcement> = []
  displayedAnnouncementList: Array<Announcement> = []
  values: string = '';

  searchPreviousAnnouncements(event : any) {
    const query = event?.target?.value?.toLowerCase();
    this.displayedAnnouncementList = this.announcementList.filter(ann => (ann.title.toLowerCase().indexOf(query) > -1 || ann.description.toLowerCase().indexOf(query) > -1));
  }

  // Hide loading component
  hideloader() {
    const loadingComponent = document.getElementById('loading');
    if (!loadingComponent) return;
    loadingComponent.style.display = 'none'
  }

  constructor(private bannerService: BannerService) { }

  ngOnInit(): void { 
    this.bannerService.getPrevious().subscribe(banners => {
      this.announcementList = banners;
      this.displayedAnnouncementList = banners
      this.hideloader()
    });
   }

}