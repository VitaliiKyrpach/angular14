import { Component } from '@angular/core';
import { ProductTable } from '../../../interfaces/interfaces';
import { ProdTableService } from '../../../services/prod-table.service';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-prod-table',
  standalone: true,
  imports: [MatTableModule, MatChipsModule],
  templateUrl: './prod-table.component.html',
  styleUrl: './prod-table.component.css'
})
export class ProdTableComponent {
  public products:  ProductTable[] = []
  public displayedColumns: string[] = ['name', 'SKU', 'price', 'country', 'tag', 'action'];
  public isShown!: number | null
  constructor(private ProdTabService: ProdTableService){
    this.products = this.ProdTabService.getProducts()
  }

  public isShownToggle(id: number):void{
    if(this.isShown === id){
      this.isShown = null
      return
    }
    this.isShown = id
  }
}
