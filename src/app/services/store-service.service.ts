import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  FilterConfig,
  Filters,
  FiltersForm,
  StoreItem,
} from '../interfaces/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreServiceService {
  public data!: StoreItem[];
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

  public getProducts(store: string): void {
    this.http
      .get<StoreItem[]>(`http://localhost:3000/api/${store}/products`)
      .subscribe((data: StoreItem[]) => {
        this.filteredData.next(data);
        this.data = data;
        console.log(this.data);
      });
  }
  public getFilters(store: string): Observable<FilterConfig[]> {
    return this.http.get<FilterConfig[]>(
      `http://localhost:3000/api/${store}/filters`
    );
  }
  public calcFilters(filters: any) {
    let data = [...this.data];
    console.log(data);
    if (filters.category) {
      data = data.filter((item) => item.category === filters.category);
    }
    if (filters.inStock != null) {
      data = data.filter((item) => item.inStock === filters.inStock);
    }
    if (filters.minPrice) {
      data = data.filter((item) => item.price >= filters.minPrice);
    }
    if (filters.maxPrice) {
      data = data.filter((item) => item.price <= filters.maxPrice);
    }
    if (filters.priceRange) {
      const plus = filters.priceRange.includes('+');
      if (plus) {
        const number = Number(filters.priceRange.replace('+', ''));
        data = data.filter((item) => item.price > number);
      } else {
        const rangeArr = filters.priceRange.split('-');
        let numberRange = rangeArr.map((item: string) => Number(item));
        data = data.filter(
          (item) => item.price > numberRange[0] && item.price < numberRange[1]
        );
      }
    }

    this.filteredData.next(data);
    console.log(data);
    console.log(filters);
  }
}
