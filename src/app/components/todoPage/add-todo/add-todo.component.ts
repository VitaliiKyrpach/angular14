import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoServiceService } from '../../../services/todo-service.service';


@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  public title: string = ''

  constructor(private todoService: TodoServiceService){}

  public addTodo(): void{
    this.todoService.addTodo(this.title);
    this.title = '';
  }
}
