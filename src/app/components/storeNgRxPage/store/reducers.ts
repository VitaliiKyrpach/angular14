import { createReducer, on } from '@ngrx/store';
import { FilterConfig, StoreItem } from '../../../interfaces/interfaces';
import { editProduct, getFilters, getProducts, getProductsFailure, getProductsSuccess, setFilters } from './actions';

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
  on(getProductsSuccess, (state, { products }) => {
    console.log(products)
    return {
      ...state, storeA: {
        ...state.storeA, 
        products: products
      }
    }
  }),
  on(getProductsFailure, (state, { error }) => ({
    ...state,
    error // Можна зберігати помилку в стані для відображення користувачу
  })),
  on(editProduct, (state) => state),
  on(getFilters, (state) => state),
  on(setFilters, (state) => state)
);
