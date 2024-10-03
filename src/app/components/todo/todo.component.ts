import { Component } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ TodoListComponent, AddTodoComponent, FilterComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

}
