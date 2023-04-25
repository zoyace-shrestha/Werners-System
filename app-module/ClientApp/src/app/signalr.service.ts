import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, Subject } from 'rxjs';
import { Announcement } from './announcement';
import { SignalRAnnouncementBroadcast } from './signalRAnnouncementBroadcast';
@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private hubConnection: any;

  private $announcement: Subject<SignalRAnnouncementBroadcast> = new Subject<SignalRAnnouncementBroadcast>();

  public get AnnouncementObservable(): Observable<SignalRAnnouncementBroadcast> {
    return this.$announcement.asObservable();
  }
  
  public listenToAnnouncement() {
    (<HubConnection>this.hubConnection).on("Created", (data: SignalRAnnouncementBroadcast) => {
      console.log(data)
      this.$announcement.next(data);
    });
  }

  public startConnection() {
    return new Promise((resolve, reject) => {

      this.hubConnection = new HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Debug)
      .withUrl("https://localhost:7258/notify", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

      // this.hubConnection = new HubConnectionBuilder()
      //   .withUrl("https://localhost:7258/notify").build();
        
      this.hubConnection.start()
        .then(() => {
          console.log("connection established");
          return resolve(true);
        })
        .catch((err: any) => {
          console.log("error occured" + err);
          reject(err);
        });
    });
  }

  constructor() { }
}