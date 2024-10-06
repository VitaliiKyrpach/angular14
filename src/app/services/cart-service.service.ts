import { Injectable } from '@angular/core';
import { Goods } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  private goods: Goods[] = [
    {
      name: 'apples',
      price: 30,
      qty: 1,
      isAdded: false,
    },
    {
      name: 'eggs',
      price: 45,
      qty: 1,
      isAdded: false,
    },
    {
      name: 'bread',
      price: 15,
      qty: 1,
      isAdded: false,
    },
    {
      name: 'cheese',
      price: 120,
      qty: 1,
      isAdded: false,
    },
    {
      name: 'potato',
      price: 10,
      qty: 1,
      isAdded: false,
    },
  ];

  private cart: Goods[] = [];

  public getGoods(): Goods[] {
    return this.goods;
  }

  public getCart(): Goods[] {
    return this.cart;
  }

  public addToCart(item: Goods) {
    const isExist = this.cart.find((slot) => slot.name === item.name);
    if (!isExist) {
      this.cart.push({ ...item });
  
    }
  }

  public removeFromCart(item: Goods) {
    this.cart = this.cart.filter((slot) => slot.name !== item.name);
    this.goods.map((slot) => {
      if (slot.name === item.name) {
        slot.isAdded = false;
      }
    });
   
  }
  public handleQty(item: Goods, action: 'inc' | 'dec') {
    this.cart.map((slot) => {
      if (slot.name === item.name) {
        if (action === 'inc') {
          slot.qty += 1;
        } else {
          if (slot.qty !== 1) {
            slot.qty -= 1;
          }
        }
      }
    });
 
  }
  
}
