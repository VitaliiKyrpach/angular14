import { Component } from '@angular/core';
import { Filter, Todo } from '../shared/todo.interface';
import { CommonModule } from '@angular/common';
import { TodoService } from '../services/repo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  public filter: Filter = Filter.ALL;

  constructor(private todoService: TodoService) {}

  public getTodo(): Todo[] {
    return this.todoService.getTodolist();
  }

  public deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  public activeTodo(id: number): void {
    this.todoService.completeTodo(id);
  }

  public changeFilter() {
    this.todoService.filterTodo(this.filter);
  }
}
