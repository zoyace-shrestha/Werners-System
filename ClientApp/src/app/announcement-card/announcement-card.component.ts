import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';

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
    const target = "_system";
    this.theInAppBrowser.create(url,target,this.options);
  }

  ngOnInit(): void {  }
  dateFormat(dateString: string) {
    let date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {weekday: undefined, year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  } 
}
