import { FormControl } from "@angular/forms";

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
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  inStock: 'Yes' | 'No';
  rating: number;
}

export enum Action {
  INC = 'inc',
  DEC = 'dec',
}

export interface RefProduct {
  name: string;
  price: number;
}

export interface Cell {
  id: number;
  mark: Mark;
}
export enum Mark {
  NONE = 'none',
  USER = 'player',
  COMP = 'computer',
  PICK = 'pick',
}

export interface ProductTable {
  image: string;
  name: string;
  discount: number;
  price: number;
  sku: string;
  token: string;
  productID: number;
  isActive: boolean;
  countryCode: string;
  itemUrl: string;
  tags: string[];
}

export interface ProdItem {
  name: string | null;
  price: number | null;
  discount: number | null;
  sku: string | null;
  id: number;
}

export interface LoginForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface RegForm {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  passwordCheck: FormControl<string | null>;
}
export interface RegErrors{
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  passwordCheck: string,
};
export interface LoginErrors{
  email: string,
  password: string,
};

export interface EditForm {
  name: FormControl<string | null>;
  price: FormControl<number | null>;
  discount: FormControl<number | null>;
  sku: FormControl<string | null>;
}

export interface EditErrors{
  name: string,
  price: string,
  discount: string,
  sku: string,
};