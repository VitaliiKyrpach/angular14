export interface Todo {
  title: string;
  acomplished: boolean;
  id: number;
}

export enum FilterTodo {
  ALL = 'all',
  COMPLETED = 'completed',
  INCOMPLETED = 'inCompleted',
}

export interface Recipe {
  author: string;
  date: string;
  text: string;
  id?: number;
}

export enum FilterRecipe {
  NONE = 'none',
  DATE = 'date',
}

export interface Goods {
  name: string;
  price: number;
  qty: number;
  isAdded: boolean;
}

export interface Product {
  id: number, 
  name: string, 
  price: number,
  category: string,
  description: string,
  inStock: 'Yes' | 'No', 
  rating: number
}
