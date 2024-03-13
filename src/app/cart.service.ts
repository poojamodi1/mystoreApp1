import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get<{ type: String, price: Number }>('assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }
}
