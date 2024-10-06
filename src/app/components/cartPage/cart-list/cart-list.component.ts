import { Component } from '@angular/core';
import { CartServiceService } from '../../../services/cart-service.service';
import { Goods } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
})
export class CartListComponent {
  public cart: Goods[] = [];

  constructor(private cartService: CartServiceService) {
    this.cart = this.cartService.getCart();
  }

  public remove(good: Goods) {
    this.cartService.removeFromCart(good);
    this.cart = this.cartService.getCart();
  }

  public price(good: Goods): number {
    return good.price * good.qty;
  }

  public calcTotal() {
    return this.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }
}
