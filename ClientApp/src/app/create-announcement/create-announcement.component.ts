import { Component, OnInit } from '@angular/core';
import { Announcement, blankAnnouncement } from '../announcement';
import { AnnouncementCardComponent } from '../announcement-card/announcement-card.component';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})
export class CreateAnnouncementComponent implements OnInit {

  announcement: Announcement = blankAnnouncement(0);

  constructor() { }

  ngOnInit(): void {
  }

}
