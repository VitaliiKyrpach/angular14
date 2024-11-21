import { createReducer, on } from '@ngrx/store';
import { Filters, StoreItem } from '../../../interfaces/interfaces';
import { editProduct, getFilters, getProducts, getProductsFailure, getProductsSuccess, setFilters } from './actions';

export interface Store {
  products: StoreItem[];
  filters: Filters;
}
export interface StoreState {
  storeA: Store;
  storeB: Store;
  storeC: Store;
}

export const initialState: StoreState = {
  storeA: {
    products: [],
    filters: {
      category: null, 
      inStock: null,
      minPrice: null,
      maxPrice: null,
      priceRange: null,
    },
  },
  storeB: {
    products: [],
    filters: {
      category: null, 
      inStock: null,
      minPrice: null,
      maxPrice: null,
      priceRange: null,
    },
  },
  storeC: {
    products: [],
    filters: {
      category: null, 
      inStock: null,
      minPrice: null,
      maxPrice: null,
      priceRange: null,
    },
  },
};

  export const storeReducer = createReducer(
    initialState,
    on(getProductsSuccess, (state, { products, store  }) => {
      return {
        ...state, 
        [store]: {
          ...state[store], 
          products: products
        }
      }
    }),
    on(getProductsFailure, (state, { error }) => ({
      ...state,
      error // Можна зберігати помилку в стані для відображення користувачу
    })),
    on(editProduct, (state) => state),
    on(setFilters, (state, { filter, store }) => {
      return {
        ...state,
        [store]: {
          ...state[store], 
          filters: filter
        }
      }
    })
  );
