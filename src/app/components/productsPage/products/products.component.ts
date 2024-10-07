import { Component } from '@angular/core';
import { ProductsTableComponent } from '../products-table/products-table.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsTableComponent, SideMenuComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
