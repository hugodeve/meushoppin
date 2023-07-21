import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            loadChildren: () => import('./components/home/home.module').then((m) => m.HomePageModule),
          },
          {
            path: 'shop',
            loadChildren: () => import('./components/product-details/product-details.module').then((m) => m.ProductDetailsPageModule),
          },
          {
            path: 'about-us',
            loadChildren: () => import('./components/about-us/about-us.module').then((m) => m.AboutUsPageModule),
          },
          {
            path: 'my-account',
            loadChildren: () => import('./components/my-account/my-account.module').then((m) => m.MyAccountPageModule),
          }
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}