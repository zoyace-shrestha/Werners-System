import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-create-announcement',
  templateUrl: './create-announcement.component.html',
  styleUrls: ['./create-announcement.component.css']
})
export class CreateAnnouncementComponent implements OnInit {

  announcement: Announcement = {
    id: 1,
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

  ngOnInit(): void {
  }

}
