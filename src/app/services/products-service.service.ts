import { Injectable } from '@angular/core';
import { Product } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  private products: Product[] = [
    {
      id: 1, 
      name: 'Product 1', 
      price: 100,
      category: 'Category 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates commodi, quod, cupiditate nobis sunt a dolorum, voluptatibus eveniet quisquam laudantium hic! Voluptatem voluptatibus asperiores fuga est alias totam officiis!',
      inStock: 'Yes', 
      rating: 3
    },
    {
      id: 2, 
      name: 'Product 2', 
      price: 200,
      category: 'Category 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates commodi, quod, cupiditate nobis sunt a dolorum, voluptatibus eveniet quisquam laudantium hic! Voluptatem voluptatibus asperiores fuga est alias totam officiis!',
      inStock: 'No', 
      rating: 5
    },
    {
      id: 3, 
      name: 'Product 3', 
      price: 150,
      category: 'Category 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates commodi, quod, cupiditate nobis sunt a dolorum, voluptatibus eveniet quisquam laudantium hic! Voluptatem voluptatibus asperiores fuga est alias totam officiis!',
      inStock: 'Yes', 
      rating: 2
    },
    {
      id: 4, 
      name: 'Product 4', 
      price: 250,
      category: 'Category 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates commodi, quod, cupiditate nobis sunt a dolorum, voluptatibus eveniet quisquam laudantium hic! Voluptatem voluptatibus asperiores fuga est alias totam officiis!',
      inStock: 'No', 
      rating: 5
    },
    {
      id: 5, 
      name: 'Product 5', 
      price: 100,
      category: 'Category 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates commodi, quod, cupiditate nobis sunt a dolorum, voluptatibus eveniet quisquam laudantium hic! Voluptatem voluptatibus asperiores fuga est alias totam officiis!',
      inStock: 'Yes', 
      rating: 3
    },
    {
      id: 6, 
      name: 'Product 6', 
      price: 200,
      category: 'Category 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates commodi, quod, cupiditate nobis sunt a dolorum, voluptatibus eveniet quisquam laudantium hic! Voluptatem voluptatibus asperiores fuga est alias totam officiis!',
      inStock: 'No', 
      rating: 5
    },
    {
      id: 7, 
      name: 'Product 7', 
      price: 150,
      category: 'Category 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates commodi, quod, cupiditate nobis sunt a dolorum, voluptatibus eveniet quisquam laudantium hic! Voluptatem voluptatibus asperiores fuga est alias totam officiis!',
      inStock: 'Yes', 
      rating: 2
    },
    {
      id: 8, 
      name: 'Product 8', 
      price: 250,
      category: 'Category 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates commodi, quod, cupiditate nobis sunt a dolorum, voluptatibus eveniet quisquam laudantium hic! Voluptatem voluptatibus asperiores fuga est alias totam officiis!',
      inStock: 'No', 
      rating: 5
    }
  ]
 public getProducts(): Product[]{
  return this.products
 }
}
