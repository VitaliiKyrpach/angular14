import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../../services/cart-service.service';
import { Goods } from '../../../interfaces/interfaces';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
})
export class CartListComponent implements OnInit{
  public total!: number;
  public cart: Goods[] = [];

  constructor(private cartService: CartServiceService) {

  }

  ngOnInit() {
    this.cartService.getCartObservable().subscribe(cart => {
      this.cart = cart;
      this.total = this.calcTotal();
    });
  }

  public remove(good: Goods):void {
    this.cartService.removeFromCart(good);
  }

  public price(good: Goods): number {
    return good.price * good.qty;
  }

  public calcTotal(): number {
    return this.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  }
}
