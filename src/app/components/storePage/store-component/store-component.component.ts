import { Component, OnInit } from '@angular/core';
import { FilterConfig, StoreItem } from '../../../interfaces/interfaces';
import { StoreServiceService } from '../../../services/store-service.service';
import { ActivatedRoute } from '@angular/router';
import { FiltersComponent } from '../filters/filters.component';
import { TableComponent } from '../table/table.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-store-component',
  standalone: true,
  imports: [TableComponent, FiltersComponent, MatDividerModule],
  templateUrl: './store-component.component.html',
  styleUrl: './store-component.component.css',
})
export class StoreComponentComponent implements OnInit {
  public store!: string;
  public data!: StoreItem[];
  public filters!: FilterConfig[];

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreServiceService
  ) {
    this.route.data.subscribe((data) => {
      console.log(data['store']);
      this.store = data['store'];
    });
  }
  ngOnInit() {
    this.storeService.getProducts(this.store);
    this.storeService.currentData.subscribe((data) => (this.data = data));
    this.storeService
      .getFilters(this.store)
      .subscribe((data: FilterConfig[]) => {
        this.filters = data;
        console.log(this.filters);
      });
  }
}
