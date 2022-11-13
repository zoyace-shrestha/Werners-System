import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { BannerService } from '../banner.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private bannerService: BannerService) { }
  testVal = 1;

  tomorrow  = new Date();

  ann: Announcement = {
    idAnnoucements: 0,
    type: 'Werner Life',
    title: 'Life on the Road Video Series',
    description: 'The latest episode of Life on the Road is available now!',
    background: 'secondary',
    link: '',
    publishDate: new Date(),
    expirationDate: this.tomorrow,
    isDraft: false
  }
  
  getAnnouncementById = () => this.bannerService.getAnnouncementById(this.testVal).subscribe();
  getAll = () => this.bannerService.getAll().subscribe();
  getActive = () => this.bannerService.getActive().subscribe();
  generateTitles = () => this.bannerService.generateTitles().subscribe();
  create = () => this.bannerService.create(this.ann).subscribe();
  update() {
    //this is necessary because we're using the input for testing
    let updatedAnn = _.cloneDeep(this.ann);
    updatedAnn.idAnnoucements = this.testVal;
    updatedAnn.type = 'UPDATED';
    return this.bannerService.update(updatedAnn).subscribe();
  } 
  delete = () => this.bannerService.deleteById(this.testVal).subscribe();
  ngOnInit(): void {
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
  }

}
