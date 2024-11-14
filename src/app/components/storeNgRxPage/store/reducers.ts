import { createReducer, on } from '@ngrx/store';
import { FilterConfig, StoreItem } from '../../../interfaces/interfaces';
import { editProduct, getFilters, getProducts, setFilters } from './actions';

export interface Store {
  products: StoreItem[];
  filters: FilterConfig[];
}
export interface StoreState {
  storeA: Store;
  storeB: Store;
  storeC: Store;
}

export const initialState: StoreState = {
  storeA: {
    products: [],
    filters: [],
  },
  storeB: {
    products: [],
    filters: [],
  },
  storeC: {
    products: [],
    filters: [],
  },
};

export const storeReducer = createReducer(
  initialState,
  on(getProducts, (state) => state),
  on(editProduct, (state) => state),
  on(getFilters, (state) => state),
  on(setFilters, (state) => state)
);
