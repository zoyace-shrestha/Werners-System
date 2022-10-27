import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrls: ['./announcement-card.component.css']
})
export class AnnouncementCardComponent implements OnInit {

  @Input() announcement? : Announcement;

  constructor() { }

  ngOnInit(): void {
    console.log(this.announcement)
  }

}
