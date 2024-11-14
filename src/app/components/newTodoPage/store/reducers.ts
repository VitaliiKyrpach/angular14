    import { createReducer, on } from '@ngrx/store';
    import { AddTodo, completedTodo, DeleteTodo } from './actions';

    export interface Todo {
        title: string | null, 
        description: string | null, 
        completed: boolean,
        id: number
    }

    export interface TodoState {
        todos: Todo[]
    }
    

    export const initialState: TodoState = {
        todos: []
    };

  

    export const TodoReducer = createReducer(
        initialState,
        on(AddTodo, (state, { todo })=> {
            return {
                ...state,
                todos: [...state.todos, todo]
            }}),
        on(completedTodo, state=> state),
        on(DeleteTodo, state=> state)
    )
