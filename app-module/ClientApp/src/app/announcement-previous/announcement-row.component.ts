import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { BannerService } from '../banner.service';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-announcement-row',
  templateUrl: './announcement-row.component.html',
  styleUrls: ['./announcement-row.component.css'],
})
export class AnnouncementRowComponent implements OnInit {

  @Input() announcement? : Announcement;
  
  convertDateToString(date : Date) : String {
    return this.datepipe.transform(date, 'MM/dd/yy') ?? "";
  }

  navigateToPreviousAnnouncementForm(announcement: Announcement) {
    let uri = '../previous/' + announcement.idAnnouncements;
    return [uri];
  }

  constructor(public datepipe: DatePipe, private bannerService: BannerService) { }
  ngOnInit(): void {  }

}