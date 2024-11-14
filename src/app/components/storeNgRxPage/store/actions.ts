import { createAction, props } from '@ngrx/store';
import { FilterConfig, StoreItem } from '../../../interfaces/interfaces';

export const setFilters = createAction(
  '[Store] Set Filters',
  props<{ filter: FilterConfig }>()
);
export const getFilters = createAction('[Store] Get Filters');
export const getProducts = createAction('[Store] Get Products');
export const editProduct = createAction(
  '[Store] Edit Product',
  props<{ product: StoreItem }>()
);
