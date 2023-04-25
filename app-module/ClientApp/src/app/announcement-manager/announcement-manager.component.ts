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

  expirationDateValid(announcement: Announcement){
    return this.getExpirationDate(announcement) > new Date(2000,1);
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

  getPublishDate(announcement: Announcement): Date{
    if (typeof announcement.publishDate == typeof Date) return announcement.publishDate;
    return new Date(announcement.publishDate);
  }

  onDelete(banner: Announcement) {
    this.bannerService.deleteById(banner.idAnnouncements).subscribe({next: () => this.deleteSuccessful(banner), error:() => this.deleteFailed()});
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
      this.bannerService.reorder(this.announcements).subscribe({next: result => { }, error: error => console.log(error)});
    }

  }

  getClass(announcement: Announcement){
    if (announcement?.expirationDate) {
      let expirationDate  = this.getExpirationDate(announcement);
      if (this.expirationDateValid(announcement)){
        if (this.getPublishDate(announcement) > new Date()) return 'expiration-green';
        let bound = new Date();
        bound.setDate(bound.getDate() + 14);
        return expirationDate > bound ? 'expiration-blue' : 'expiration-red';
      }
    }
    return "";
  }  


  ngOnInit() {
    // Retrieve active banners
    this.bannerService.getActiveAndFuturePublished().subscribe({next: banners => {
      this.announcements = banners;
    }, error: () => toast('danger', 'Failed to retrieve announcements', this.toastController), complete: hideloader});

    // Hide loading component
    function hideloader() {
      const loadingComponent = document.getElementById('loading');
      if (!loadingComponent) return;
      loadingComponent.style.display = 'none'
    }
  }

}
