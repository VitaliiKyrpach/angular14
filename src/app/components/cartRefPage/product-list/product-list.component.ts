import { Component, EventEmitter, Output } from '@angular/core';
import { RefProduct } from '../../../interfaces/interfaces';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  //використав створений інтерфейс Product
  @Output() itemAdded = new EventEmitter<RefProduct>();

  public productList: RefProduct[] = [
    { name: 'Phone', price: 699 },
    { name: 'Laptop', price: 999 },
  ];

  public addToCart(item: RefProduct):void {
    this.itemAdded.emit(item);
  }
  //Прибрав onDestroy так як в цьому випадку він не несе ніякої користі
}
