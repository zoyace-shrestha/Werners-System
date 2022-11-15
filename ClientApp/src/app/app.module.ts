import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AnnouncementCardComponent } from './announcement-card/announcement-card.component';
import { IonicModule } from '@ionic/angular';
import { AnnouncementBannerComponent } from './announcement-banner/announcement-banner.component';
import { SwiperModule } from 'swiper/angular';
import { CreateAnnouncementComponent } from './create-announcement/create-announcement.component';
import { AnnouncementManagerComponent } from './announcement-manager/announcement-manager.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AnnouncementCardComponent,
    AnnouncementBannerComponent,
    CreateAnnouncementComponent,
    AnnouncementManagerComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'announcementManager', component: AnnouncementManagerComponent },
      { path: 'create', component: CreateAnnouncementComponent },
    ]),
    IonicModule.forRoot(),
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
