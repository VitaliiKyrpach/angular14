import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreState } from './reducers';

export const selectFeatureStore = createFeatureSelector<StoreState>('store');

export const selectStoreAProds = createSelector(
  selectFeatureStore,
  (state) => state.storeA.products
);
export const selectStoreBProds = createSelector(
  selectFeatureStore,
  (state) => state.storeB.products
);
export const selectStoreCProds = createSelector(
  selectFeatureStore,
  (state) => state.storeC.products
);
