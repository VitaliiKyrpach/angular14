import { Component, HostListener} from '@angular/core';
import { ProductsTableComponent } from '../products-table/products-table.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { Product } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsTableComponent, SideMenuComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  public product: Product | null = null;


  @HostListener('document:click', ['$event'])
    onClick(event: Event):void {
      const target = event.target as HTMLElement;

      if(target.parentElement?.tagName === 'TR' || target.parentElement?.tagName === 'TD' || target.parentElement?.tagName === "APP-SIDE-MENU"){
        return
      }else{
        this.product = null
      }
    }

  public receiveProduct(product: Product): void{
    if(this.product === null){
      this.product = product;
 
    } else{
      if(this.product.id === product.id){
  
        this.product = null
      }else{
        this.product = product
      }
    }
  }
  
}
