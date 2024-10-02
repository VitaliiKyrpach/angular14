import { Component } from '@angular/core';
import { Filter } from '../../interfaces/interfaces';
import { FormsModule } from '@angular/forms';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent { 
  public filter: Filter = Filter.ALL

  constructor(private todoService: TodoServiceService){

  }

  public setFilter(){
    this.todoService.filterTodo(this.filter)
  }

}
