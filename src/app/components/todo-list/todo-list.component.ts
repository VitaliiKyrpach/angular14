import { Component } from '@angular/core';
import { Todo } from '../../interfaces/interfaces';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  constructor(private todoService: TodoServiceService){}

  public getTodos(): Todo[]{
    return this.todoService.getTodos()
  }

  public deleteTodo(id: number): void{
    this.todoService.deleteTodo(id);
  }

  public changeTodo(id: number): void{
    this.todoService.changeTodo(id)
  }
}
