import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.page.html',
  styleUrls: ['banner.page.scss'],
})
export class BannerPage {
  bannerMessages: { id: number, title: string, description: string, imageUrl: string }[] = new Array;
  public createImageUrl(input: string)  {
    return "url(assets/" + input + ".jpg)";
  }
  public parseJson (json: { id: number, title: string, description: string, imageId: string }[]) {
    json.forEach(x => {
      this.bannerMessages.push({
        id: x.id,
        title: x.title,
        description: x.description,
        imageUrl: this.createImageUrl(x.imageId)
      });
    });
  }
  constructor() {}
  ngOnInit() {
    setTimeout(() => {
      let fakeJson = [
        { id: 0, title: "Available", description: "item is available", imageId: "first" },
        { id: 1, title: "Ready", description: "item is ready", imageId: "second" },
        { id: 2, title: "Started", description: "item is started", imageId: "third" },
    ];
    this.parseJson(fakeJson);
    }, 1000);
  }

  
}
