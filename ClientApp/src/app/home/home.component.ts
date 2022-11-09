import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private bannerService: BannerService) { }
  testVal = 1;

  ann: Announcement = {
    idAnnoucements: 0,
    type: 'Werner Life',
    title: 'Life on the Road Video Series',
    description: 'The latest episode of Life on the Road is available now!',
    background: 'secondary',
    link: '',
    publishDate: new Date(),
    expirationDate: new Date(),
    isDraft: false
  }

  updatedAnn: Announcement = {
    idAnnoucements: 0,
    type: 'Werner Life - Updated',
    title: 'Life on the Road Video Series - Updated',
    description: 'The latest episode of Life on the Road is available now!',
    background: 'tertiary',
    link: '',
    publishDate: new Date(),
    expirationDate: new Date(),
    isDraft: false
  };

  getAnnouncementById = () => this.bannerService.getAnnouncementById(this.testVal).subscribe();
  getAll = () => this.bannerService.getAll().subscribe();
  getActive = () => this.bannerService.getActive().subscribe();
  generateTitles = () => this.bannerService.generateTitles().subscribe();
  create = () => this.bannerService.create(this.ann).subscribe();
  update() {
    //this is necessary because we're using the input for testing
    this.updatedAnn.idAnnoucements = this.testVal;
    
    return this.bannerService.update(this.updatedAnn).subscribe();
  } 
  delete = () => this.bannerService.deleteById(this.testVal).subscribe();
  ngOnInit(): void {
  }

}
