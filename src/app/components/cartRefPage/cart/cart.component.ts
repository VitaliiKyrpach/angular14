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
        <li class="cart-item" *ngFor="let item of cart">
          <p>{{ item.name }}</p>
          <p> - {{ item.price }} $</p>
          <p *ngIf="item.name === 'Phone'; else laptopAmount">
          x{{cartPhone}}
          </p>
        </li>
      </ul>
    </div>
    <button class='cartBtn' *ngIf="cart.length > 0" type='button' (click)='clearCart()'>Clear cart</button>
    <ng-template #emptyCart>
      <p>The cart is empty.</p>
    </ng-template>
    <ng-template #laptopAmount>
      <p> x{{cartLaptop}}</p>
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
  public cartPhone: number = 0;
  public cartLaptop: number = 0;


  ngOnInit() {
    this.cart = this.cartItems
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cartItems']) {
      this.handleCartList()
    }
  }

  //додав метод обробки списку товарів,
  //щоб відображались тільки унікальні товари та їхня кількість
  private handleCartList():void{
    this.cartPhone = 0;
    this.cartLaptop = 0;
    const uniqueProducts = this.cartItems.filter((product, index, array) => 
      index === array.findIndex((p) => p.name === product.name)
    );
    
    this.cart = uniqueProducts
    this.cartItems.filter(item => {
      switch(item.name){
        case "Phone": 
        this.cartPhone += 1;
        break;
        case "Laptop": 
        this.cartLaptop += 1;
        break;
      }
    })
    
  }

  //додав метод очищення корзини
  public clearCart():void{
    this.emptyCart.emit()
  }
}
