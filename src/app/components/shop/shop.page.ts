import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage {
  products: any[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  constructor(private router: Router) {}

  navigateToProductDetails(productId: number) {
    this.router.navigate(['product-details', productId]);
  }
}