import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreState } from './reducers';

export const selectFeatureStore = createFeatureSelector<StoreState>('store');

export const selectStoreAFilters = createSelector(selectFeatureStore, (state)=> state.storeA.filters)
export const selectStoreBFilters = createSelector(selectFeatureStore, (state)=> state.storeB.filters)
export const selectStoreCFilters = createSelector(selectFeatureStore, (state)=> state.storeC.filters)

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
export const selectStore = createSelector(
  selectFeatureStore,
  (state) => state
);

