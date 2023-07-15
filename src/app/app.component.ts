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
   
  }
}