import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { LiteralExpr } from '@angular/compiler';
import { stringify } from 'querystring';

@Component({
  selector: 'app-announcement-card',
  templateUrl: './announcement-card.component.html',
  styleUrls: ['./announcement-card.component.css']
})
export class AnnouncementCardComponent implements OnInit {

  @Input() announcement? : Announcement;
  theInAppBrowser: typeof InAppBrowser = InAppBrowser;
   options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes', //Windows only    
    };

  constructor() { }
  public openWithSystemBrowser(url : string){
    const matches = url.match(/https:\//);

    if (matches) {
      const target = "_system";
      this.theInAppBrowser.create(url,target,this.options);
    }
    
  }
  public linkChecker(link: string) {
    if (this.announcement?.link) {
      return "cursor: pointer;";
    }
    return "";
  }
  
  ngOnInit(): void {  }
  publishDateFormat(announcement: Announcement) {
    let date = this.getPublishDate(announcement);
    const options: Intl.DateTimeFormatOptions = {weekday: undefined, year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  } 

  getPublishDate(announcement: Announcement): Date{
    if (typeof announcement.publishDate == typeof Date) return announcement.publishDate;
    return new Date(announcement.publishDate);
  }

  publishDateValid(announcement: Announcement){
    return this.getPublishDate(announcement) > new Date(2000,1);
  }

  publishDateNew(announcement: Announcement, upToDaysOld: number = 14){
    let bound = new Date();
    bound.setDate(bound.getDate() - upToDaysOld);
    return this.getPublishDate(announcement) > bound;
  }

}
