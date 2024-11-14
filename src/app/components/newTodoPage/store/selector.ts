import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './reducers';

const selectFeatureTodos = createFeatureSelector<TodoState>('todos')

export const selectTodos = createSelector(selectFeatureTodos, (state)=> state.todos)