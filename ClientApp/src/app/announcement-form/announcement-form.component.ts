import { Component, Input, OnInit } from '@angular/core';
import { Announcement, blankAnnouncement } from '../announcement';
import { BannerService } from '../banner.service';
import { ToastController } from '@ionic/angular';
import { toast } from '../toasthelper';


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

  resultToast = {
    next: () => toast('success', 'Save successful', this.toastController), 
    error: () => toast('failure','Save failed', this.toastController)
  }

  constructor(private bannerService: BannerService, private toastController: ToastController) { }

  dateFormat(dateString: string) {
    let date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {weekday: undefined, year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  ngOnInit(): void {
  }

  saveDraft(){
    this.announcement.isDraft = true;
    if (!this.isUpdate){
      this.bannerService.create(this.announcement).subscribe(this.resultToast);
    } else {
      this.bannerService.update(this.announcement).subscribe(this.resultToast);
    }
  }

  save(){
    this.announcement.isDraft = false;
    if (!this.isUpdate){
      this.bannerService.create(this.announcement).subscribe(this.resultToast);
    } else {
      this.bannerService.update(this.announcement).subscribe(this.resultToast);
    }
  }

  reset(){
    this.announcement =  blankAnnouncement(this.announcement.idAnnoucements);
  }
}
