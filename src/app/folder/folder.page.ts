import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage {
  public folder: string;
  public products: any[] = []; // Variable para almacenar los productos
  public page: number = 1;
  public perPage: number = 10;
  public totalProducts: number = 0;

  constructor(private http: HttpClient, private router: Router) {
    this.folder = 'loja';
    this.getProducts();
  }

  navigateToProductDetails(productId: number) {
    this.router.navigate(['product-details', productId]);
  }
  
  getProducts() {
    const apiUrl = 'https://meushoppin.com/wp-json/wc/v3';
    const consumerKey = 'ck_a1db7b7d03ecd1e86f748b53a32a1fcbe9e9b753';
    const consumerSecret = 'cs_7ffa8b4289032bea0e1b982e4f117facf6566c2b';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(consumerKey + ':' + consumerSecret),
    });

    const params = new HttpParams()
      .set('page', this.page.toString())
      .set('per_page', this.perPage.toString());

    this.http
      .get<any[]>(`${apiUrl}/products`, { headers, params })
      .subscribe(
        (response) => {
          this.products = response;
          this.totalProducts = response.length;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}