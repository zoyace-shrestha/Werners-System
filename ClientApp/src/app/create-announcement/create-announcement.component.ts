import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})
export class CreateAnnouncementComponent implements OnInit {

  announcement: Announcement = {
    idAnnoucements: 1,
    title: "",
    description: "",
    type: "",
    link: "",
    background: "",
    publishDate: new Date(),
    expirationDate: new Date(),
    isDraft: false
  }
  
  constructor() { }

  dateFormat(dateString: string) {
    let date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {weekday: undefined, year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  ngOnInit(): void {
  }

}
