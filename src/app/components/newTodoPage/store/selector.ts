import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './reducers';

const selectFeatureTodos = createFeatureSelector<TodoState>('todos');
// const selectFeatureStore = createFeatureSelector<any>('store');

export const selectTodos = createSelector(
  selectFeatureTodos,
  (state) => state.todos
);
// export const selectStore = createSelector(selectFeatureStore, (state) => state);
