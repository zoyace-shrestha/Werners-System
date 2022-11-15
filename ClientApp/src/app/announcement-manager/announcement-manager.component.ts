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

  dateFormat(dateString: string) {
    let date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {weekday: undefined, year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  } 

  ngOnInit() {
    // Retrieve active banners
    this.bannerService.getActive().subscribe(banners => {
      this.announcements = banners;
      hideloader();
    });

    // Hide loading component
    function hideloader() {
      const loadingComponent = document.getElementById('loading');
      console.log("hiding")
      console.log(loadingComponent);
      if (!loadingComponent) return;
      loadingComponent.style.display = 'none'
    }
  }
}
