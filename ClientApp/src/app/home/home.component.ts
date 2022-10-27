import { Component } from '@angular/core';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  ann: Announcement = {
    id: 1,
    title: "2022 June Associate Recognition Ceremony",
    description: "Werner was pleased to recognize four professional drivers: David C, Robert L, Daniel P, and Raymond W. Werner was pleased to recognize four professional drivers: David C, Robw",
    type: "Werner News",
    link: "Link",
    background: "primary",
    publishDate: new Date(),
    expirationDate: new Date(),
    isDraft: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
