import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddTodo } from '../store/actions';
import { Todo } from '../store/reducers';

@Component({
  selector: 'add-todo',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatDividerModule, ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  public todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  constructor(private store: Store){}

  public addTodo():void{
    
    const newTodo: Todo = {
      title: this.todoForm.controls.title.value,
      description: this.todoForm.controls.description.value,
      completed: false,
      id: Date.now()
    }
    console.log(newTodo)
    this.store.dispatch(AddTodo({ todo: newTodo }))
    this.todoForm.reset()
    this.todoForm.controls.title.setErrors(null)
    this.todoForm.controls.description.setErrors(null)

  }
}
