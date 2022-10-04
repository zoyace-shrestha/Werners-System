import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.page.html',
  styleUrls: ['banner.page.scss'],
})
export class BannerPage {

  bannerMessages: {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
  }[] = new Array();

  public parseJson(
    json: { id: number; title: string; description: string; backgroundColor: string }[]
  ) {
    json.forEach((x) => {
      this.bannerMessages.push({
        id: x.id,
        title: x.title,
        description: x.description,
        backgroundColor: x.backgroundColor,
      });
    });
  }

  constructor() {}

  ngOnInit() {

    setTimeout(() => {
      let sampleData = [
        {
          id: 0,
          title: 'Banner 1',
          description: 'Description for banner 1',
          backgroundColor: backgroundColors.primary,
        },
        {
          id: 1,
          title: 'Banner 2',
          description: 'Description for banner 2',
          backgroundColor: backgroundColors.secondary,
        },
        {
          id: 2,
          title: 'Banner 3',
          description: 'Description for banner 3',
          backgroundColor: backgroundColors.tertiary,
        },
      ];
      this.parseJson(sampleData);
    }, 1000);

  }
}

const backgroundColors = 
{
  white: '#FFFFFF',
  green: '#218719',
  red: '#C03131',
  tertiary: '#163762',
  secondary: '#1877F2',
  primary: '#3369B4',
}