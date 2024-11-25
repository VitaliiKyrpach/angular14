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
import { Observable } from 'rxjs';
import { selectStore, selectStoreAFilters, selectStoreAProds, selectStoreBFilters, selectStoreBProds, selectStoreCFilters, selectStoreCProds } from '../store/selectors';

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
  public storeType!: 'storeA'| 'storeB' | 'storeC';
  public data$!: Observable<StoreItem[]>;
  private filters$!: Observable<any>;

  constructor(private route: ActivatedRoute, private store: Store) { 
    this.route.data.subscribe((data) => {
      this.storeType = data['store'];
    });  
  }

  ngOnInit() {
    this.filters$ = this.getFiltersForStore(this.storeType);
    this.filters$.subscribe(() => {
      this.store.dispatch(getProducts({ store: this.storeType }));
    });
    this.store.dispatch(getProducts({store: this.storeType}));
    switch(this.storeType){
      case 'storeA':
      this.data$ = this.store.select(selectStoreAProds);
      break;
      case 'storeB':
        this.data$ = this.store.select(selectStoreBProds);
      break;
      case 'storeC':
        this.data$ = this.store.select(selectStoreCProds);
      break;
    }


  }
  private getFiltersForStore(store: string): Observable<any> {
    switch (store) {
      case 'storeA':
        return this.store.select(selectStoreAFilters);
      case 'storeB':
        return this.store.select(selectStoreBFilters);
      case 'storeC':
        return this.store.select(selectStoreCFilters);
      default:
        return new Observable(); // Повертаємо порожній Observable, якщо магазин не знайдений
    }
  }
}
