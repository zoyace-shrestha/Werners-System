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
  baseUrl = "https://localhost:7258/announcement";
  
  getAnnouncementById(id: Number):Observable<Announcement> {
    let path = "/" + id;
      return this.http.get<Announcement>(this.baseUrl + path)
      .pipe(
        tap(Announcement => console.log(path + ' call successful.', Announcement)),
        catchError(this.handleError<Announcement>(path  + ' call unsuccessful'))
    );  
  }
  getAll = ():Observable<Announcement[]> => this.makeGetListCall('/getAll');

  getActive  = ():Observable<Announcement[]> => this.makeGetListCall('/getActive');

  deleteById(id: Number) {
    let path = "/delete/" + id;
    return this.http.delete<{}>(this.baseUrl + path)
    .pipe(
      tap(Object => console.log(path + ' call successful.', Object)),
      catchError(this.handleError<{}>(path  + ' call unsuccessful'))
    );  
  }

  create = (announcement: Announcement):Observable<Announcement> => this.makePostCall('/create', announcement);
  update = (announcement: Announcement):Observable<Announcement> => this.makePostCall('/update', announcement);
  generateTitles = ():Observable<Announcement[]> => this.makeGetListCall('/generateTitles');

  private makeGetListCall(path: String){
    return this.http.get<Announcement[]>(this.baseUrl + path)
      .pipe(
        tap(list => console.log(path + ' call successful.', list)),
        catchError(this.handleError<Announcement[]>(path  + ' call unsuccessful', []))
    );
  }

  private makePostCall(path: String, body: Announcement){
    return this.http.post<Announcement>(this.baseUrl + path, body)
    .pipe(
      tap(Announcement => console.log(path + ' call successful.', Announcement)),
      catchError(this.handleError<Announcement>(path  + ' call unsuccessful'))
  );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
