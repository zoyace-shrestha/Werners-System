import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrationPagePageRoutingModule } from './administration-page-routing.module';

import { AdministrationPagePage } from './administration-page.page';
import { BannerEditComponent } from '../banner-edit-component/banner-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrationPagePageRoutingModule,
  ],
  declarations: [AdministrationPagePage, BannerEditComponent],
})
export class AdministrationPagePageModule {}
