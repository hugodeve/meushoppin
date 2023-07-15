import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  public product: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('productId') ?? '';
    this.getProductDetails(productId);
  }

  getProductDetails(productId: string) {
    const apiUrl = 'https://meushoppin.com/wp-json/wc/v3';
    const consumerKey = 'ck_a1db7b7d03ecd1e86f748b53a32a1fcbe9e9b753';
    const consumerSecret = 'cs_7ffa8b4289032bea0e1b982e4f117facf6566c2b';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(consumerKey + ':' + consumerSecret),
    });

    this.http.get<any>(`${apiUrl}/products/${productId}`, { headers }).subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Método para agregar el producto al carrito
  addToCart() {
    // Lógica para agregar el producto al carrito
  }
}