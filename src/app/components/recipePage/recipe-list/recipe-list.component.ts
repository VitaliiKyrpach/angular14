import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Recipe } from '../../../interfaces/interfaces';
import { RecipeServiceService } from '../../../services/recipe-service.service';


@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  public recipes: Recipe[]=[]
  constructor(private recipeService: RecipeServiceService){
    this.recipes = this.recipeService.getRecipes()
  }
  ngOnInit() {
    this.recipeService.getFilterObservable().subscribe(filter => {
      
      this.recipes = this.recipeService.getRecipes()
    });
  }
}
