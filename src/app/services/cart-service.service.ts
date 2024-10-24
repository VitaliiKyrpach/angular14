import { Injectable } from '@angular/core';
import { Goods } from '../interfaces/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

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

  private cartSubject = new BehaviorSubject<Goods[]>(this.cart);
  
  public getGoods(): Goods[] {
    return this.goods;
  }

  public getCart(): Goods[] {
    return this.cartSubject.value;
  }

  public getCartObservable(): Observable<Goods[]> {
    return this.cartSubject.asObservable();
  }

  public addToCart(item: Goods):void {
    const isExist = this.cart.find((slot) => slot.name === item.name);
    if (!isExist) {
      this.cart.push({ ...item });
      this.cartSubject.next(this.cart);
    }
  }

  public removeFromCart(item: Goods):void {
    this.cart = this.cart.filter((slot) => slot.name !== item.name);
    this.goods.map((slot) => {
      if (slot.name === item.name) {
        slot.isAdded = false;
      }
    });
    this.cartSubject.next(this.cart);
  }

  public handleQty(item: Goods, action: 'inc' | 'dec'):void {
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
    this.cartSubject.next(this.cart);
  }
  
}
