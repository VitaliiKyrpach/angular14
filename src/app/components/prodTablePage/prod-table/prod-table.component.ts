import { Component } from '@angular/core';
import { ProductTable } from '../../../interfaces/interfaces';
import { ProdTableService } from '../../../services/prod-table.service';

@Component({
  selector: 'app-prod-table',
  standalone: true,
  imports: [],
  templateUrl: './prod-table.component.html',
  styleUrl: './prod-table.component.css'
})
export class ProdTableComponent {
  public products:  ProductTable[] = []
  constructor(private ProdTabService: ProdTableService){
    this.products = this.ProdTabService.getProducts()
  }
}
