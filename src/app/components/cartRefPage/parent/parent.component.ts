import { Component } from '@angular/core';
import { RefProduct } from '../../../interfaces/interfaces';
import { CartComponent } from '../cart/cart.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CartComponent, ProductListComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  //використав створений інтерфейс Product
  public cart: RefProduct[] = [];

  public onItemAdded(item: RefProduct): void {
    //зробив такий варіант, щоб відпрацьовував ngOnChanges в компоненті корзини
    this.cart = [...this.cart, item]; 
  }
  //додав метод очистки корзини
  public clearCart(){
    this.cart = []
  }
}
