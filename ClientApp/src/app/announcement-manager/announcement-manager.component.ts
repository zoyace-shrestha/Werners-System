import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

import { Announcement } from '../announcement';

@Component({
  selector: 'app-announcement-manager',
  templateUrl: './announcement-manager.component.html',
  styleUrls: ['./announcement-manager.component.css'],
})
export class AnnouncementManagerComponent implements OnInit {
  // @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;
  gen(): Array<Announcement> {
    let ret = Array<Announcement>()

    for(let i = 0; i < 10; i++) {
      let temp: Announcement = {
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
      ret.push(temp)
    }
    return ret;
  }

  // announcementList?: Array<Announcement>
  announcements: Array<Announcement> = this.gen()

  constructor() {}

  ngOnInit() {

  }
  // doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
  //   this.bannerMessages = ev.detail.complete(this.bannerMessages);
  // }
}
