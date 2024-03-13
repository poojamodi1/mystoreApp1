import { Injectable } from '@angular/core';
import { Product } from './products';

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

  constructor() { }
}
