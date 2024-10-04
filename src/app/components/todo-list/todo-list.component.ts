import { Component } from '@angular/core';
import { Todo } from '../../interfaces/interfaces';
import { TodoServiceService } from '../../services/todo-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
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
