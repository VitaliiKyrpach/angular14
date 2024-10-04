import { Component } from '@angular/core';
import { RecipeServiceService } from '../../services/recipe-service.service';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../interfaces/interfaces';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  constructor(private recipeService: RecipeServiceService){}

  public getRecipes(): Recipe[]{
    return this.recipeService.getRecipes()
  }
}
