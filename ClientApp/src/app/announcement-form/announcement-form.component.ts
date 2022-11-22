import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Announcement, blankAnnouncement } from '../announcement';
import { BannerService } from '../banner.service';
import { ToastController } from '@ionic/angular';
import { toast } from '../toasthelper';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.css']
})
export class AnnouncementFormComponent implements OnInit {


  @Input() announcement!: Announcement;
  @Input() title?: String;
  @Input() saveButtonTitle?: String;
  @Input() saveDraftButtonTitle?: String;
  @Input() isUpdate?: Boolean;

  // Announcement Date Variables
  publishDate: String = this.announcement?.publishDate.toISOString();
  expirationDate: String = this.announcement?.expirationDate.toISOString();
  publishDateLabel: String = "";
  expirationDateLabel: String = ""

  resultToast = {
    next: () => toast('success', 'Save successful', this.toastController), 
    error: () => toast('failure','Save failed', this.toastController)
  }

  // Save announcement as draft announcement
  saveDraft(){
    this.announcement.isDraft = true;
    if (!this.isUpdate){
      this.bannerService.create(this.announcement).subscribe(this.resultToast);
    } else {
      this.bannerService.update(this.announcement).subscribe(this.resultToast);
    }
  }

  // Save announcement as published announcement
  save(){
    this.announcement.isDraft = false;
    if (!this.isUpdate){
      this.bannerService.create(this.announcement).subscribe(this.resultToast);
    } else {
      this.bannerService.update(this.announcement).subscribe(this.resultToast);
    }
  }

  // Reset announcement to blank announcement
  reset(){
    this.announcement =  blankAnnouncement(this.announcement.idAnnoucements);
    this.publishDate = this.announcement?.publishDate.toISOString();
    this.expirationDate = this.announcement?.expirationDate.toISOString();
    this.publishDateLabel = "";
    this.expirationDateLabel = ""
  }

  // Publish Date: Update announcement property and label value when ion-datetime value is changed
  publishDateChanged(value: any) {
    this.announcement.publishDate = value;
    this.publishDateLabel = formatDate(value, 'MM/dd/yyyy - hh:mm a', 'en-US');
  }

  // Expiration Date: Update announcement property and label value when ion-datetime value is changed
  expirationDateChanged(value: any) {
    this.announcement.expirationDate = value;
    this.expirationDateLabel = formatDate(value, 'MM/dd/yyyy - hh:mm a', 'en-US');
  }

  // Update date value and date labels
  public updateDateValues(){
    // We only want to update page if this is an update announcement page
    if (!this.isUpdate) {
      return
    }

    // If the announcment input is not populated, do not update the date properties
    if (this.announcement.idAnnoucements === 0) {
      return;
    }

    // Ensure the date is set to default UTC Timezone prior to comparing
    if (new Date(this.announcement.publishDate.toString() + ".000+00:00").getTime() !== new Date(0).getTime()) {
      this.publishDate = new Date(this.announcement?.publishDate).toISOString();
      this.publishDateLabel = formatDate(this.announcement?.publishDate, 'MM/dd/yyyy - hh:mm a', 'en-US');
    }

    if (new Date(this.announcement.expirationDate.toString() + ".000+00:00").getTime() !== new Date(0).getTime()) {
      this.expirationDate = new Date(this.announcement?.expirationDate).toISOString();
      this.expirationDateLabel = formatDate(this.announcement?.expirationDate, 'MM/dd/yyyy - hh:mm a', 'en-US');
    }
  }

  constructor(private bannerService: BannerService, private toastController: ToastController) { }

  // When input values are updated
  ngOnChanges(_ : OnChanges) {
    this.updateDateValues()
  }

  ngOnInit(): void { }
}
