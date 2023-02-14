import { Injectable } from '@angular/core';
import { Announcement } from './announcement';
import { Observable, ObservableInput, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { AnnouncementSearch, getDefaultSearch} from './announcementSearch';

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
  getAll = ():Observable<Announcement[]> => {
    return this.makePostListCall('/getAnnouncements', getDefaultSearch())
  };

  getActivePublished  = ():Observable<Announcement[]> => {
    let searchObject: AnnouncementSearch = getDefaultSearch();
    searchObject.includeFuture = false;
    searchObject.includeDraft = false;
    searchObject.includePrevious = false;
    return this.makePostListCall('/getAnnouncements', searchObject);
  }

  getActiveAndFuturePublished  = ():Observable<Announcement[]> => {
    let searchObject: AnnouncementSearch = getDefaultSearch();
    searchObject.includeDraft = false;
    searchObject.includePrevious = false;    
    return this.makePostListCall('/getAnnouncements', searchObject);
  }

  getPrevious = ():Observable<Announcement[]> => {
    let searchObject: AnnouncementSearch = getDefaultSearch();
    searchObject.includeFuture = false;
    searchObject.includeActive = false;
    searchObject.includeDraft = false;
    return this.makePostListCall('/getAnnouncements', searchObject);
  }

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
  reorder = (announcements: Announcement[]):Observable<Announcement[]> => this.makePostReorderCall('/reorder', announcements);

  private makePostCall(path: String, body: Announcement){
    return this.http.post<Announcement>(this.baseUrl + path, body)
      .pipe(tap(Announcement => console.log(path + ' call successful.', Announcement)));
  }

  private makePostReorderCall(path: String, body: Announcement[]) {
    return this.http.post<Announcement[]>(this.baseUrl + path, body)
      .pipe(tap(Announcement => console.log(path + ' call successful.', Announcement)), )
      
  }
  
  private makePostListCall(path: String, body: AnnouncementSearch){
    return this.http.post<Announcement[]>(this.baseUrl + path, body)
      .pipe(tap(Announcement => console.log(path + ' call successful.', Announcement)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
