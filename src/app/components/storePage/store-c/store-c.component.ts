import { Component, OnInit } from '@angular/core';
import { StoreServiceService } from '../../../services/store-service.service';
import { FilterConfig, StoreItem } from '../../../interfaces/interfaces';
import { TableComponent } from '../table/table.component';
import { FiltersComponent } from '../filters/filters.component';

@Component({
  selector: 'app-store-c',
  standalone: true,
  imports: [TableComponent, FiltersComponent],
  templateUrl: './store-c.component.html',
  styleUrl: './store-c.component.css',
})
export class StoreCComponent implements OnInit {
  public data!: StoreItem[];
  public filters!: FilterConfig[];

  constructor(private storeService: StoreServiceService) {}
  ngOnInit(): void {
    this.storeService.getProducts('storeC');
    this.storeService.currentData.subscribe((data) => (this.data = data));
    this.storeService.getFilters('storeC').subscribe((data: FilterConfig[]) => {
      this.filters = data;
      console.log(this.filters);
    });
  }
}
