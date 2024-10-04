import { Component, Input } from '@angular/core';
import { FilterRecipe, FilterTodo } from '../../interfaces/interfaces';
import { FormsModule } from '@angular/forms';
import { TodoServiceService } from '../../services/todo-service.service';
import { RecipeServiceService } from '../../services/recipe-service.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent { 
  @Input() filterType!: string;

  public filterTodo: FilterTodo = FilterTodo.ALL
  public filterRecipe: FilterRecipe = FilterRecipe.NONE

  constructor(private todoService: TodoServiceService, private recipeService: RecipeServiceService){

  }

  public setFilter(): void{
    this.todoService.filterTodo(this.filterTodo)
  }

  public recipeFilter(): void{
    this.recipeService.filterRecipes(this.filterRecipe)
  }
}
