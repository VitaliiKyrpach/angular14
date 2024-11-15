import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../store/reducers';
import { Store } from '@ngrx/store';
import { selectTodos } from '../store/selector';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { completedTodo, DeleteTodo } from '../store/actions';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    FormsModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos$!: Observable<Todo[]>;

  constructor(private store: Store) {
    this.todos$ = this.store.select(selectTodos);
  }
  public deleteTodo(id: number) {
    this.store.dispatch(DeleteTodo({ id }));
  }
  public toggleComplete(id: number) {
    this.store.dispatch(completedTodo({ id }));
  }
  public getStore() {
    this.todos$.subscribe((store) => console.log(store));
  }
}
