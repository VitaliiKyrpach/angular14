import { Component } from '@angular/core';
import { CartServiceService } from '../../../services/cart-service.service';
import { Goods } from '../../../interfaces/interfaces';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-goods-list',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './goods-list.component.html',
  styleUrl: './goods-list.component.css',
})
export class GoodsListComponent {
  public goods: Goods[] = [];

  constructor(private cartService: CartServiceService) {
    this.goods = this.cartService.getGoods();
  }

  public addGoods(item: Goods) {
    item.isAdded = true;
    this.cartService.addToCart(item);
  }
  public handleAction(item: Goods, action: 'inc' | 'dec') {
    this.cartService.handleQty(item, action);
  }
}
