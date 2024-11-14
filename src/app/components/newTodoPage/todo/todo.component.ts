import { Component } from '@angular/core';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todoStore',
  standalone: true,
  imports: [AddTodoComponent, TodoListComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoStoreComponent {

}
