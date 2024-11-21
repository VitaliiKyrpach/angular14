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
import { selectStore, selectStoreAProds, selectStoreBProds, selectStoreCProds } from '../store/selectors';

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

  constructor(private route: ActivatedRoute, private store: Store) { 
    this.route.data.subscribe((data) => {
      console.log(data['store']);
      this.storeType = data['store'];
    });  
  }
  ngOnInit() {
    console.log('Dispatching getProducts action');
    console.log(this.storeType)
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

    // this.store.select(selectStore).subscribe(item=> console.log(item))

  }
}
