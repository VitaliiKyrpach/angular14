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
import { selectStoreA } from '../store/selectors';

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
  // public storeType!: string;
  public data$!: Observable<StoreItem[]>;

  constructor( private store: Store) {   
  }
  ngOnInit() {
    console.log('Dispatching getProducts action');
    this.store.dispatch(getProducts());
    this.data$ = this.store.select(selectStoreA)
    
    this.data$.subscribe(data=> console.log(data))
 
  }
}
