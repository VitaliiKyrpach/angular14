import { Component } from '@angular/core';
import { GoodsListComponent } from '../goods-list/goods-list.component';
import { CartListComponent } from '../cart-list/cart-list.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [GoodsListComponent, CartListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {}
