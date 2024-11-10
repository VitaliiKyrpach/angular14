import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from '../../../services/store-service.service';
import { FilterConfig, StoreItem } from '../../../interfaces/interfaces';

import { TableComponent } from '../table/table.component';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-store-b',
  standalone: true,
  imports: [TableComponent, FiltersComponent],
  templateUrl: './store-b.component.html',
  styleUrl: './store-b.component.css',
})
export class StoreBComponent implements OnInit {
  public data!: StoreItem[];
  public filters!: FilterConfig[];

  constructor(private storeService: StoreServiceService) {}
  ngOnInit(): void {
    this.storeService.getProducts('storeB');
    this.storeService.currentData.subscribe((data) => (this.data = data));
    this.storeService.getFilters('storeB').subscribe((data: FilterConfig[]) => {
      this.filters = data;
      console.log(this.filters);
    });
  }
}
