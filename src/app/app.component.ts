import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: 'home' },
    { title: 'Loja', url: '/folder/loja', icon: 'cart' },
    { title: 'Sobre Nós', url: '/folder/sobrenos', icon: 'layers' },
    { title: 'Minha Conta ', url: '/folder/minha-conta', icon: 'person' },

  ];
  public folder: string;
  public products: any[] = []; // Variable para almacenar los productos

  constructor(private http: HttpClient) {
    this.folder = 'Home'; 
    this.getProducts();
   
  }

  getProducts() {
    const apiUrl = 'http://89.117.32.100/meushoppin/wp-json/wc/v3'; // Reemplaza con la URL de tu tienda WooCommerce
    const consumerKey = 'ck_3bb69ba0a31a73a20111fda8f73cc5aa75c64108'; // Reemplaza con tu Consumer Key
    const consumerSecret = 'cs_4e8ad9ec3e976893822237d813dcc7ee3e856cac'; // Reemplaza con tu Consumer Secret

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(consumerKey + ':' + consumerSecret),
    });

    // Realizar la petición GET a la API de WooCommerce para obtener los productos
    this.http.get<any[]>(`${apiUrl}/products`, { headers }).subscribe(
      (response) => {
        this.products = response; // Almacenar los productos en la variable 'products'
      },
      (error) => {
        console.error(error);
      }
    );
  }
}