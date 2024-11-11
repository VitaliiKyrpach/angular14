import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterConfig, Filters, StoreItem } from '../interfaces/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreServiceService {
  private store!: string;
  public filteredData = new BehaviorSubject<StoreItem[]>([]);
  public currentData = this.filteredData.asObservable();
  public filters = new BehaviorSubject<Partial<Filters>>({
    category: null,
    inStock: null,
    minPrice: null,
    maxPrice: null,
    priceRange: null,
  });

  constructor(private http: HttpClient) {}

  public getProducts(store: string, filters?: any): void {
    let params = new HttpParams();
    this.store = store;
    if (filters) {
      if (filters.category) {
        params = params.set('category', filters.category);
      }
      if (filters.inStock !== null) {
        params = params.set('inStock', filters.inStock);
      }
      if (filters.minPrice) {
        params = params.set('minPrice', filters.minPrice.toString());
      }
      if (filters.maxPrice) {
        params = params.set('maxPrice', filters.maxPrice.toString());
      }
    }

    this.http
      .get<StoreItem[]>(`http://localhost:3000/api/${store}/products`, {
        params,
      })
      .subscribe((data: StoreItem[]) => {
        this.filteredData.next(data);
      });
  }
  public getFilters(store: string): Observable<FilterConfig[]> {
    return this.http.get<FilterConfig[]>(
      `http://localhost:3000/api/${store}/filters`
    );
  }
  public setFilters(filters: any) {
    this.getProducts(this.store, filters);
  }
}
