import { Injectable } from '@angular/core';
import { Filter, Todo } from '../shared/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    {
      title: 'learn angular',
      completed: false,
      id: 0,
    },
  ];
  private filteredTodos: Todo[] = [];
  private id = 0;

  constructor() {
    this.filteredTodos = this.todos;
  }

  public getTodolist(): Todo[] {
    return this.filteredTodos;
  }
  public addTodo(title: string): void {
    this.id += 1;
    const newTodo: Todo = {
      title: title,
      completed: false,
      id: this.id,
    };
    this.todos.push(newTodo);
    this.filteredTodos = this.todos;
  }

  public filterTodo(filter: string) {
    if (filter === Filter.COMPLETED) {
      this.filteredTodos = this.todos.filter((todo) => todo.completed === true);
    } else if (filter === Filter.INCOMPLETED) {
      this.filteredTodos = this.todos.filter(
        (todo) => todo.completed === false
      );
    } else {
      this.filteredTodos = this.todos;
    }
  }

  public completeTodo(id: number) {
    this.todos = this.todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this.filteredTodos = this.todos;
  }

  public deleteTodo(id: number): void {
    this.todos = this.todos.filter((item) => item.id != id);
    this.filteredTodos = this.todos;
  }
}
