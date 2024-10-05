import { Component } from '@angular/core';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { FilterComponent } from '../../shared/filter/filter.component';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [FilterComponent, AddRecipeComponent, RecipeListComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent {}
