import { Component } from '@angular/core';
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
  constructor(private productService: ProductsServiceService){
    this.products = productService.getProducts()
  }
}
