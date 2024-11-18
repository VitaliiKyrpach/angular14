import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreState } from './reducers';

export const selectFeatureStore = createFeatureSelector<StoreState>('store');

export const selectStoreA = createSelector(
  selectFeatureStore,
  (state) => state.storeA.products
);
export const selectStoreB = createSelector(
  selectFeatureStore,
  (state) => state.storeB
);
export const selectStoreC = createSelector(
  selectFeatureStore,
  (state) => state.storeC
);
