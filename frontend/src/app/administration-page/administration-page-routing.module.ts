import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationPagePage } from './administration-page.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrationPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationPagePageRoutingModule {}
