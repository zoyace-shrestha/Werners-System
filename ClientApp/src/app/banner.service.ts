import { Injectable } from '@angular/core';
import { Announcement } from './announcement';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http: HttpClient) { }

  getTestBanners(): Observable<Announcement[]>{
     //let ret = Array<Announcement>()

     //for(let i = 0; i < 10; i++) {
     //  let temp: Announcement = {
     //    id: 1,
     //    title: "2022 June Associate Recognition Ceremony",
     //    description: "Werner was pleased to recognize four professional drivers: David C, Robert L, Daniel P, and Raymond W. Werner was pleased to recognize four professional drivers: David C, Robw",
     //    type: "Werner News",
     //    link: "Link",
     //    background: "primary",
     //    publishDate: new Date(),
     //    expirationDate: new Date(),
     //    isDraft: false
     //  }
     //  ret.push(temp)
     //}
     //return of(ret);
    //let httpHeader = {
    //  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    //};

    let url = "https://localhost:7258/announcement/getActive";
    return this.http.get<Announcement[]>(url)
      .pipe(
        tap(Announcement => console.log('Announcements fetched!')),
        catchError(this.handleError<Announcement[]>('Get announcement', []))
    );
    // return this.http.get<Announcement[]>(url, null);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
