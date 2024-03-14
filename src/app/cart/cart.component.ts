import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(): void{
    this.items = this.cartService.clearCart();
    console.warn('your order has been submited', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}

