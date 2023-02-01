import { Component, OnInit } from '@angular/core';
import { result } from 'lodash';
import { Announcement } from '../announcement';
import { BannerService } from '../banner.service';
import { ItemReorderEventDetail } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { toast } from '../toasthelper';

@Component({
  selector: 'app-announcement-manager',
  templateUrl: './announcement-manager.component.html',
  styleUrls: ['./announcement-manager.component.css'],
})
export class AnnouncementManagerComponent implements OnInit {

  announcements: Array<Announcement> = [];

  constructor(private bannerService: BannerService, private toastController: ToastController) { }

  deleteSuccessful(banner: Announcement) {
    const index = this.announcements.indexOf(banner);
    if (index > -1) {
      this.announcements.splice(index, 1);
    }
    toast('success', 'Delete successful', this.toastController);
  }

  deleteFailed() {
    toast('danger','Delete failed', this.toastController);
  }

  expirationDateFormat(announcement: Announcement) {
    let date = this.getExpirationDate(announcement);
    const options: Intl.DateTimeFormatOptions = {weekday: undefined, year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  } 

  getExpirationDate(announcement: Announcement): Date{
    if (typeof announcement.expirationDate == typeof Date) return announcement.expirationDate;
    return new Date(announcement.expirationDate);
  }

  onDelete(banner: Announcement) {
    this.bannerService.deleteById(banner.idAnnouncements).subscribe(() => this.deleteSuccessful(banner), () => this.deleteFailed());
  }

  updatePageLink(banner: Announcement){
    let uri = '../update/' + banner.idAnnouncements;
    return [uri];
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    this.announcements = ev.detail.complete(this.announcements);
    this.announcements.forEach((element, index) => {
      element.priority = index+1;
    });

    if(this.announcements){
      this.bannerService.reorder(this.announcements).subscribe(result => { }, error => console.log(error));
    }

  }

  ngOnInit() {
    // Retrieve active banners
    this.bannerService.getActiveAndFuturePublished().subscribe(banners => {
      this.announcements = banners;
      hideloader();
    });

    // Hide loading component
    function hideloader() {
      const loadingComponent = document.getElementById('loading');
      if (!loadingComponent) return;
      loadingComponent.style.display = 'none'
    }
  }

}
