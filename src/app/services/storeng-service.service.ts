import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterConfig, Filters, StoreItem } from '../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { selectStoreAFilters, selectStoreBFilters, selectStoreCFilters } from '../components/storeNgRxPage/store/selectors';
import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class StorengServiceService {
    constructor(private http: HttpClient, private store: Store) { }
    // public getProducts(store: string){
    //   let params = new HttpParams();
    //   switch(store){
    //     case 'storeA':
    //     this.filters$ = this.store.select(selectStoreAFilters);
    //     break;
    //     case 'storeB':
    //       this.filters$ = this.store.select(selectStoreBFilters);
    //     break;
    //     case 'storeC':
    //       this.filters$ = this.store.select(selectStoreCFilters);
    //     break;
    //   }

    //   this.filters$.subscribe((filters: any)=> {
    //     if (filters.category) {
    //       params = params.set('category', filters.category);
    //     }
    //     if (filters.inStock !== null) {
    //       params = params.set('inStock', filters.inStock);
    //     }
    //     if (filters.minPrice) {
    //       params = params.set('minPrice', filters.minPrice.toString());
    //     }
    //     if (filters.maxPrice) {
    //       params = params.set('maxPrice', filters.maxPrice.toString());
    //     }
    //     console.log(params)
    //     console.log(filters)

    //   })
    //   return this.http
    //     .get<StoreItem[]>(`http://localhost:3000/api/${store}/products`, {
    //       params,
    //     })
    // }
    public getProducts(store: string): Observable<StoreItem[]> {
      const params = this.createHttpParams(store);
  
      return this.http.get<StoreItem[]>(`http://localhost:3000/api/${store}/products`, {
        params,
      });
    }

    public getFilters(store: string): Observable<FilterConfig[]> {
      return this.http.get<FilterConfig[]>(`http://localhost:3000/api/${store}/filters`);
    }
    private createHttpParams(store: string): HttpParams {
      let params = new HttpParams();
      const filters$ = this.getFiltersForStore(store);
  
      filters$.subscribe((filters: Filters) => {
        if (filters.category) {
          params = params.set('category', filters.category);
        }
        if (filters.inStock !== null) {
          params = params.set('inStock', filters.inStock.toString());
        }
        if (filters.minPrice) {
          params = params.set('minPrice', filters.minPrice.toString());
        }
        if (filters.maxPrice) {
          params = params.set('maxPrice', filters.maxPrice.toString());
        }
      });
  
      return params;
    }
    private getFiltersForStore(store: string): Observable<Filters> {
      switch (store) {
        case 'storeA':
          return this.store.select(selectStoreAFilters);
        case 'storeB':
          return this.store.select(selectStoreBFilters);
        case 'storeC':
          return this.store.select(selectStoreCFilters);
        default:
          return new Observable();
      }
    }
  }
