import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'administration-page',
    loadChildren: () =>
      import('./administration-page/administration-page.module').then(
        (m) => m.AdministrationPagePageModule
      ),
  },  {
    path: 'create-banner',
    loadChildren: () => import('./create-banner/create-banner.module').then( m => m.CreateBannerPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
