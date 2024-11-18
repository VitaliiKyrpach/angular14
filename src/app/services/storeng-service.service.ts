import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreItem } from '../interfaces/interfaces';

  @Injectable({
    providedIn: 'root'
  })
  export class StorengServiceService {

    constructor(private http: HttpClient) { }
    public getProducts(){
      console.log('service')
      return this.http
        .get<StoreItem[]>(`http://localhost:3000/api/storeA/products`)
    }
  }
