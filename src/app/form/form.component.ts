import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/repo.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  public title: string = '';
  constructor(private todoService: TodoService) {}
  public addTodo() {
    this.todoService.addTodo(this.title);
    this.title = '';
  }
}
