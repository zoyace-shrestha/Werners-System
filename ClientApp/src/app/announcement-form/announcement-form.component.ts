import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcement';

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

  constructor() { }

  dateFormat(dateString: string) {
    let date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {weekday: undefined, year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  ngOnInit(): void {
  }

}
