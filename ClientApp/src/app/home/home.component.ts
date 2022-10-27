import { Component } from '@angular/core';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  ann: Announcement = {
    id: 1,
    title: "Title",
    description: "Description",
    type: "Type",
    link: "Link",
    background: "blue",
    publishDate: new Date(),
    expirationDate: new Date(),
    isDraft: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
