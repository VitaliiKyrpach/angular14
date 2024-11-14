import { createAction, props } from '@ngrx/store';
import { Todo } from './reducers';

export const AddTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>())
export const completedTodo = createAction('[Todo] Completed Todo', props<{id: number}>())
export const DeleteTodo = createAction('[Todo] Delete Todo', props<{id: number}>())
