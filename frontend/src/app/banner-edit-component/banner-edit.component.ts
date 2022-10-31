import {Component, OnInit } from '@angular/core';
import getTestBanners from '../../services/banner';


@Component({
  selector: 'app-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit-component.scss'],
})
export class BannerEditComponent implements OnInit {
  
  bannerMessages: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    backgroundColor: string;
    textColor: string;
    date: Date;
  }[] = new Array();

  public async parseJson(
    json: {
      id: number,
      title: string,
      subtitle: string,
      description: string,
      colorScheme: {
        background: string,
        text: string
      },
      date: Date
    }[]
  ) {
    json.forEach((x) => {
      this.bannerMessages.push({
        id: x.id,
        title: x.title,
        subtitle: x.subtitle,
        description: x.description,
        backgroundColor: x.colorScheme.background,
        textColor: x.colorScheme.text,
        date: x.date,
      });
    });
  }
  constructor() {}

  ngOnInit() {
    getTestBanners().then((json) => {
      this.parseJson(json);
    })
  }
}

