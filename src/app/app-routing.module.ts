import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './components/home/home.page';
import { ShopPage } from './components/shop/shop.page';
import { AboutUsPage } from './components/about-us/about-us.page';
import { MyAccountPage } from './components/my-account/my-account.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'shop',
    component: ShopPage
  },
  {
    path: 'about-us',
    component: AboutUsPage
  },
  {
    path: 'my-account',
    component: MyAccountPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }