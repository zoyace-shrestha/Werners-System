import { Component } from '@angular/core';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  ann: Announcement = {
    id: 1,
    type: 'Werner Life',
    title: 'Life on the Road Video Series',
    description: 'The latest episode of Life on the Road is available now!',
    background: 'secondary',
    link: '',
    publishDate: new Date(),
    expirationDate: new Date(),
    isDraft: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
