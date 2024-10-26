import { Injectable } from '@angular/core';
import { ProdItem, ProductTable } from '../interfaces/interfaces';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProdTableService {
  private productsSubject = new BehaviorSubject<ProductTable[]>([]);
  public books$ = this.productsSubject.asObservable();
  private item!: ProdItem;
  private tableItem = new BehaviorSubject<ProdItem>(this.item);

  constructor(private http: HttpClient) {}

  public getAllProducts(): void {
    this.http
      .get<ProductTable[]>('http://localhost:80/all-products')
      .pipe(
        map((data) => {
          return data.map((product) => {
            return {
              ...product,
              countryCode: product.countryCode.toUpperCase(),
            };
          });
        })
      )
      .subscribe((data) => this.productsSubject.next(data));
  }

  public editItem(body: ProdItem): Subscription {
    return this.http
      .put(`http://localhost:80/products/${body.id}`, body)
      .subscribe((data) => {
        this.getAllProducts();
      });
  }

  public addItem(body: any): Subscription {
    console.log(body);
    return this.http
      .post('http://localhost:80/products', body)
      .subscribe((data) => {
        this.getAllProducts();
      });
  }

  public deleteItem(id: number): Subscription {
    this.books$.subscribe((data) => console.log(data));
    return this.http
      .delete(`http://localhost:80/products/${id}`)
      .subscribe((data) => {
        console.log(data);
        this.getAllProducts();
      });
  }

  public getTableItem(): Observable<ProdItem> {
    return this.tableItem.asObservable();
  }

  public setItem(item: ProdItem): void {
    this.item = item;
    this.tableItem.next(this.item);
  }
}
