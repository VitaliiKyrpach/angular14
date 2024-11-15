import { Injectable } from '@angular/core';

export interface Goods {
  id: number;
  name: string;
  price: number;
  qty: number;
  isAdded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  private goods: Goods[] = [
    {
      id: 1,
      name: 'apples',
      price: 30,
      qty: 1,
      isAdded: false,
    },
    {
      id: 2,
      name: 'eggs',
      price: 45,
      qty: 1,
      isAdded: false,
    },
    {
      id: 3,
      name: 'bread',
      price: 15,
      qty: 1,
      isAdded: false,
    },
    {
      id: 4,
      name: 'cheese',
      price: 120,
      qty: 1,
      isAdded: false,
    },
    {
      id: 5,
      name: 'potato',
      price: 10,
      qty: 1,
      isAdded: false,
    },
    {
      id: 6,
      name: 'apples',
      price: 30,
      qty: 1,
      isAdded: false,
    },
    {
      id: 7,
      name: 'eggs',
      price: 45,
      qty: 1,
      isAdded: false,
    },
    {
      id: 8,
      name: 'bread',
      price: 15,
      qty: 1,
      isAdded: false,
    },
    {
      id: 9,
      name: 'cheese',
      price: 120,
      qty: 1,
      isAdded: false,
    },
    {
      id: 10,
      name: 'potato',
      price: 10,
      qty: 1,
      isAdded: false,
    },
    {
      id: 11,
      name: 'apples',
      price: 30,
      qty: 1,
      isAdded: false,
    },
    {
      id: 12,
      name: 'eggs',
      price: 45,
      qty: 1,
      isAdded: false,
    },
    {
      id: 13,
      name: 'bread',
      price: 15,
      qty: 1,
      isAdded: false,
    },
    {
      id: 14,
      name: 'cheese',
      price: 120,
      qty: 1,
      isAdded: false,
    },
    {
      id: 15,
      name: 'potato',
      price: 10,
      qty: 1,
      isAdded: false,
    },
  ];

  public getGoods(): Goods[] {
    return this.goods;
  }
}
