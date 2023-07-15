import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentUrl: string;

  pages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Shop', url: '/shop', icon: 'basket' },
    { title: 'About Us', url: '/about-us', icon: 'information-circle' },
    { title: 'My Account', url: '/my-account', icon: 'person' }
  ];

  constructor(private router: Router) {
    this.currentUrl = '';
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }
}