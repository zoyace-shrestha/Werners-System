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
    subtitle: string;
    description: string;
    backgroundColor: string;
    date: Date;
  }[] = new Array();

  public parseJson(
    json: {
      id: number;
      title: string;
      subtitle: string;
      description: string;
      backgroundColor: string;
      date: Date;
    }[]
  ) {
    json.forEach((x) => {
      this.bannerMessages.push({
        id: x.id,
        title: x.title,
        subtitle: x.subtitle,
        description: x.description,
        backgroundColor: x.backgroundColor,
        date: x.date,
      });
    });
  }

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      let sampleData = [
        {
          id: 0,
          title: 'Werner News ',
          subtitle: '2022 June Associate Recognition Ceremony',
          description:
            'Werner was pleased to recognize four professional drivers: David C, Robert L, Daniel P, and Raymond W. Werner was pleased to recognize four professional drivers: David C, Robw ',
          backgroundColor: backgroundColors.tertiary,
          date: new Date(),
        },
        {
          id: 1,
          title: 'Werner Life',
          subtitle: 'Life on the Road Video Series',
          description:
            'The latest episode of Life on the Road is available now!',
          backgroundColor: backgroundColors.secondary,
          date: new Date(),
        },
        {
          id: 2,
          title: 'COVID-19 Updates',
          subtitle: 'What Drivers Need to Know About COVID-19',
          description: 'The latest information about COVID- 19',
          backgroundColor: backgroundColors.secondary,
          date: new Date(),
        },
        {
          id: 3,
          title: 'Werner Points',
          subtitle: 'Werner rewards has been added!',
          description: 'Click here to get started! ',
          backgroundColor: backgroundColors.success,
          date: new Date(),
        },
        {
          id: 4,
          title: 'COVID-19 Updates',
          subtitle: 'What Drivers Need to Know About COVID-19',
          description: 'The latest information about COVID-19  ',
          backgroundColor: backgroundColors.danger,
          date: new Date(),
        },
        {
          id: 5,
          title: 'Get Paid ',
          subtitle: '2022 June Associate Recognition Ceremony',
          description:
            'Werner was pleased to recognize four professional drivers: David C, Robert L, Daniel P, and Raymond W. Werner was pleased to recognize four professional drivers: David C, Robw',
          backgroundColor: backgroundColors.success,
          date: new Date(),
        },
      ];
      this.parseJson(sampleData);
    }, 1000);
  }
}

const backgroundColors = {
  white: '#FFFFFF',
  success: '#218719',
  danger: '#C03131',
  warning: '#FFFFFF',
  tertiary: '#163762',
  secondary: '#1877F2',
  primary: '#3369B4',
};
