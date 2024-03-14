import { HttpClient } from '@angular/common/http';
import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  item: Product[] = [];

  addToCart(product: Product) {
    this.item.push(product);
  }

  getItems() {
    return this.item;
  }

  clearCart() {
    this.item = [];
    return this.item;
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }
}
