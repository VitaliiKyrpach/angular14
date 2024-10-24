import { Injectable } from '@angular/core';
import { ProdItem, ProductTable } from '../interfaces/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdTableService {
  private products: ProductTable[] = [
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 1',
        discount: 10,
        price: 100,
        sku: 'SKU001',
        token: 'abc123',
        productID: 1,
        isActive: true,
        countryCode: 'US',
        itemUrl: 'https://example.com/product-1',
        tags: ['electronics', 'new', 'sale']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 2',
        discount: 5,
        price: 150,
        sku: 'SKU002',
        token: 'def456',
        productID: 2,
        isActive: false,
        countryCode: 'CA',
        itemUrl: 'https://example.com/product-2',
        tags: ['furniture', 'popular']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 3',
        discount: 15,
        price: 200,
        sku: 'SKU003',
        token: 'ghi789',
        productID: 3,
        isActive: true,
        countryCode: 'UK',
        itemUrl: 'https://example.com/product-3',
        tags: ['clothing', 'discount']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 4',
        discount: 0,
        price: 300,
        sku: 'SKU004',
        token: 'jkl012',
        productID: 4,
        isActive: true,
        countryCode: 'US',
        itemUrl: 'https://example.com/product-4',
        tags: ['sports', 'new']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 5',
        discount: 25,
        price: 80,
        sku: 'SKU005',
        token: 'mno345',
        productID: 5,
        isActive: false,
        countryCode: 'DE',
        itemUrl: 'https://example.com/product-5',
        tags: ['outdoor', 'clearance']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 6',
        discount: 10,
        price: 120,
        sku: 'SKU006',
        token: 'pqr678',
        productID: 6,
        isActive: true,
        countryCode: 'UK',
        itemUrl: 'https://example.com/product-6',
        tags: ['kitchen', 'best-seller']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 7',
        discount: 30,
        price: 50,
        sku: 'SKU007',
        token: 'stu901',
        productID: 7,
        isActive: false,
        countryCode: 'CA',
        itemUrl: 'https://example.com/product-7',
        tags: ['beauty', 'gift']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 8',
        discount: 12,
        price: 90,
        sku: 'SKU008',
        token: 'vwx234',
        productID: 8,
        isActive: true,
        countryCode: 'DE',
        itemUrl: 'https://example.com/product-8',
        tags: ['clothing', 'eco-friendly']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 9',
        discount: 0,
        price: 500,
        sku: 'SKU009',
        token: 'yzb567',
        productID: 9,
        isActive: true,
        countryCode: 'US',
        itemUrl: 'https://example.com/product-9',
        tags: ['luxury', 'premium']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 10',
        discount: 20,
        price: 75,
        sku: 'SKU010',
        token: 'cde890',
        productID: 10,
        isActive: true,
        countryCode: 'UK',
        itemUrl: 'https://example.com/product-10',
        tags: ['tech', 'sale']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 11',
        discount: 18,
        price: 130,
        sku: 'SKU011',
        token: 'fgh123',
        productID: 11,
        isActive: true,
        countryCode: 'DE',
        itemUrl: 'https://example.com/product-11',
        tags: ['home', 'popular']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 12',
        discount: 35,
        price: 55,
        sku: 'SKU012',
        token: 'ijk456',
        productID: 12,
        isActive: false,
        countryCode: 'CA',
        itemUrl: 'https://example.com/product-12',
        tags: ['fashion', 'limited']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 13',
        discount: 0,
        price: 600,
        sku: 'SKU013',
        token: 'lmn789',
        productID: 13,
        isActive: true,
        countryCode: 'US',
        itemUrl: 'https://example.com/product-13',
        tags: ['gadgets', 'new']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 14',
        discount: 8,
        price: 95,
        sku: 'SKU014',
        token: 'opq012',
        productID: 14,
        isActive: false,
        countryCode: 'UK',
        itemUrl: 'https://example.com/product-14',
        tags: ['sports', 'sale']
    },
    {
        image: 'https://placehold.co/50x50?text=50x50',
        name: 'Product 15',
        discount: 22,
        price: 110,
        sku: 'SKU015',
        token: 'rst345',
        productID: 15,
        isActive: true,
        countryCode: 'CA',
        itemUrl: 'https://example.com/product-15',
        tags: ['garden', 'special-offer']
    }
];

private item!:ProdItem
private tableItem = new BehaviorSubject<ProdItem>(this.item)

getProducts(): ProductTable[]{
  return this.products
}

public getTableItem(): Observable<ProdItem>{
    return this.tableItem.asObservable()
}
public setItem(item:ProdItem): void{
    this.item = item
    this.tableItem.next(this.item)
}
}
