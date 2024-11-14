import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { StoreItem } from '../../../interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { TableNgComponent } from '../table-ng/table-ng.component';
import { FiltersANgComponent } from '../filtersA-ng/filtersA-ng.component';
import { FiltersBNgComponent } from '../filtersB-ng/filtersB-ng.component';
import { FiltersCNgComponent } from '../filtersC-ng/filtersC-ng.component';
import { Store } from '@ngrx/store';
import { getProducts } from '../store/actions';

@Component({
  selector: 'store-ng-comp',
  standalone: true,
  imports: [
    MatDividerModule,
    TableNgComponent,
    FiltersANgComponent,
    FiltersBNgComponent,
    FiltersCNgComponent,
  ],
  templateUrl: './store-ng-comp.component.html',
  styleUrl: './store-ng-comp.component.css',
})
export class StoreNgCompComponent implements OnInit {
  public storeType!: string;
  public data!: StoreItem[];

  constructor(private route: ActivatedRoute, private store: Store) {
    this.route.data.subscribe((data) => {
      console.log(data['store']);
      this.storeType = data['store'];
    });
  }
  ngOnInit() {
    this.store.dispatch(getProducts());
    // this.storeService.getProducts(this.store);
    // this.storeService.currentData.subscribe((data) => (this.data = data));
    // this.storeService
    //   .getFilters(this.store)
    //   .subscribe((data: FilterConfig[]) => {
    //     this.filters = data;
    //     console.log(this.filters);
    //   });
  }
}
