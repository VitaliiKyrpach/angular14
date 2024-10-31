import { Component, OnInit } from '@angular/core';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ProductTable } from '../../../interfaces/interfaces';
import { ProdTableService } from '../../../services/prod-table.service';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { NameComponent } from '../prodComponents/name/name.component';
import { SkuComponent } from '../prodComponents/sku/sku.component';
import { PriceComponent } from '../prodComponents/price/price.component';
import { CountryComponent } from '../prodComponents/country/country.component';
import { TagComponent } from '../prodComponents/tag/tag.component';
import { ActionComponent } from '../prodComponents/action/action.component';
import { CategoryComponent } from '../prodComponents/category/category.component';

@Component({
  selector: 'app-prod-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatChipsModule,
    IconSpriteModule,
    NameComponent,
    SkuComponent,
    PriceComponent,
    CountryComponent,
    TagComponent,
    ActionComponent,
    CategoryComponent,
  ],
  templateUrl: './prod-table.component.html',
  styleUrl: './prod-table.component.css',
})
export class ProdTableComponent implements OnInit {
  public products: ProductTable[] = [];
  public displayedColumns: string[] = [
    'name',
    'SKU',
    'price',
    'country',
    'tag',
    'cat',
    'action',
  ];
  public isShown!: number | null;
  constructor(private ProdTabService: ProdTableService) {}
  ngOnInit(): void {
    this.ProdTabService.getAllProducts();
    this.ProdTabService.books$.subscribe((data) => (this.products = data));
  }
  public receiveId(id: number | null): void {
    this.isShown = id;
  }
}
