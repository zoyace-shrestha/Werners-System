import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Announcement, blankAnnouncement } from '../announcement';
import { BannerService } from '../banner.service';
import { ToastController } from '@ionic/angular';
import { toast } from '../toasthelper';
import {formatDate} from '@angular/common';
import { Router } from '@angular/router';
import { AnnouncementValidation } from './announcementValidation';

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
  expirationDateLabel: String = "";

  validation = new AnnouncementValidation();

  resultToast = {
    next: () => {
      this.router.navigate(['/announcementManager']);
      toast('success', 'Save successful', this.toastController);
    }, 
    error: () => toast('danger','Save failed', this.toastController)
  }

  // Save announcement as draft announcement
  saveDraft(){
    if (!this.validate(true)) return;
    this.announcement.isDraft = true;
    if (!this.isUpdate){
      this.bannerService.create(this.announcement).subscribe(this.resultToast);
    } else {
      this.bannerService.update(this.announcement).subscribe(this.resultToast);
    }
  }

  // Save announcement as published announcement
  save(){
    if (!this.validate()) return;
    this.announcement.isDraft = false;
    if (!this.isUpdate){
      this.bannerService.create(this.announcement).subscribe(this.resultToast);
    } else {
      this.bannerService.update(this.announcement).subscribe(this.resultToast);
    }
  }

  validate(isDraft: Boolean = false){
      this.validation.titleState = !!this.announcement.title;
      let minDate = new Date(2000, 1);
      if (!isDraft) {
        this.validation.backgroundState = !!this.announcement.background;
        this.validation.descriptionState = !!this.announcement.description;
        this.validation.publishDateState = this.announcement.publishDate && new Date(this.announcement.publishDate) >= minDate;
        this.validation.typeState = !!this.announcement.type;
      } 
      console.log('expirationDate', this.announcement.expirationDate);
      console.log('minDate', minDate);
      return this.validation.valid();
  }

  validationClass(input: Boolean | null) {
      if (input === false) return 'ion-invalid';
      return null;
  }

  // Reset announcement to blank announcement
  reset(){
    this.announcement = blankAnnouncement(this.announcement.idAnnouncements);
    this.publishDate = this.announcement?.publishDate.toISOString();
    this.expirationDate = this.announcement?.expirationDate.toISOString();
    this.publishDateLabel = "";
    this.expirationDateLabel = ""
  }

  // Publish Date: Update announcement property and label value when ion-datetime value is changed
  publishDateChanged(value: any) {
    this.validation.publishDateState = null;
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
    if (this.announcement.idAnnouncements === 0) {
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

  constructor(private bannerService: BannerService, private toastController: ToastController, private router: Router) { }

  // When input values are updated
  ngOnChanges(_ : OnChanges) {
    this.updateDateValues()
  }

  ngOnInit(): void { }
}
