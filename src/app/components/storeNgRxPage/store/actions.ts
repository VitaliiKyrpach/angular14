import { createAction, props } from '@ngrx/store';
import { Filters, StoreItem } from '../../../interfaces/interfaces';
import { StoreState } from './reducers';

export const setFilters = createAction(
  '[Store] Set Filters',
  props<{ filter: Filters; store: keyof StoreState }>()
);
export const getFilters = createAction('[Store] Get Filters');
export const getProducts = createAction(
  '[Store] Get Products',
  props<{ store: keyof StoreState }>()
);
export const getProductsSuccess = createAction(
  '[Store] Get ProductsSuccess',
  props<{ products: StoreItem[]; store: keyof StoreState }>()
);
export const getProductsFailure = createAction(
  '[Store] Fail Products',
  props<{ error: any }>()
);
export const editProduct = createAction(
  '[Store] Edit Product',
  props<{ product: StoreItem; storeType: 'storeA' | 'storeB' | 'storeC' }>()
);
