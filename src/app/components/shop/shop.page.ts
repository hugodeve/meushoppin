import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage {
  constructor(private router: Router) {}

  navigateToProductDetails(productId: number) {
    this.router.navigate(['product-details', productId]);
  }
}