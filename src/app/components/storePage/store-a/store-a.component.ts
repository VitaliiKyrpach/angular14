import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from '../../../services/store-service.service';
import { FilterConfig, StoreItem } from '../../../interfaces/interfaces';
import { TableComponent } from '../table/table.component';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-store-a',
  standalone: true,
  imports: [TableComponent, FiltersComponent],
  templateUrl: './store-a.component.html',
  styleUrl: './store-a.component.css',
})
export class StoreAComponent implements OnInit {
  public data!: StoreItem[];
  public filters!: FilterConfig[];
  constructor(private storeService: StoreServiceService) {}
  ngOnInit() {
    this.storeService.getProducts('storeA');
    this.storeService.currentData.subscribe((data) => (this.data = data));
    // this.data = this.storeService.data;
    this.storeService.getFilters('storeA').subscribe((data: FilterConfig[]) => {
      this.filters = data;
      console.log(this.filters);
    });
  }
}
