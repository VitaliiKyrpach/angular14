import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RefProduct } from '../../../interfaces/interfaces';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports:[CommonModule],
  template: `
    <h2 class='cart-title'>Your Cart</h2>
    <div *ngIf="cart.length > 0; else emptyCart">
      <ul class="cart-list">
        <li class="cart-item" *ngFor="let item of cartItems">
          <p>{{ item.name }}</p>
          <p> - {{ item.price }} $</p>
           
        </li>
      </ul>
    </div>
    <button *ngIf="cart.length > 0" type='button' (click)='clearCart()'>Clear cart</button>
    <ng-template #emptyCart>
      <p>The cart is empty.</p>
    </ng-template>
  `,
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnChanges {
  //використав створений інтерфейс Product

  @Input() cartItems: RefProduct[] = [];
  @Output() emptyCart = new EventEmitter()
  //в цьому компоненті можна було обійтись без лайф-сайкл хуків,
  //але для ії реалізаціі, з суто практичної точки зору, додав змінну cart,
  //в яку записується вхідний пропс cartItems.

  public cart: RefProduct[] = [];

  ngOnInit() {
    this.cart = this.cartItems
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cartItems']) {
      this.cart = this.cartItems
    }
  }

  //додав метод очищення корзини
  public clearCart():void{
    this.emptyCart.emit()
  }
}
