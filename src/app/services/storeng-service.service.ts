import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterConfig, StoreItem } from '../interfaces/interfaces';

  @Injectable({
    providedIn: 'root'
  })
  export class StorengServiceService {

    constructor(private http: HttpClient) { }
    public getProducts(store: string){
      console.log('service')
      return this.http
        .get<StoreItem[]>(`http://localhost:3000/api/${store}/products`)
    }
    public getFilters(store: string){
      return this.http.get<FilterConfig[]>(`http://localhost:3000/api/${store}/filters`)
    }
  }
