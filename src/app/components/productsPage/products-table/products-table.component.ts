import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../interfaces/interfaces';
import { ProductsServiceService } from '../../../services/products-service.service';
import { ProductsPriceComponent } from '../products-price/products-price.component';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [ProductsPriceComponent],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  public products: Product[] = []
  @Output() dispatchProduct = new EventEmitter<Product>()


  constructor(private productService: ProductsServiceService){
    this.products = productService.getProducts()
  }
  public handleAside(product: Product, e: Event):void{
    const target = e.target as HTMLElement;
    const input = target.tagName === 'INPUT'
    if(!input){
      this.dispatchProduct.emit(product)
    }
    
  }
}
