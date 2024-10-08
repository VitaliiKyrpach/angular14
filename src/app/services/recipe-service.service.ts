import { Injectable } from '@angular/core';
import { FilterRecipe, Recipe } from '../interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  private id: number = 0;
  private filterRecipe: FilterRecipe = FilterRecipe.NONE
  public recipes: Recipe[] = []
  public sortedRecipes: Recipe[] = []
  constructor() { 
    this.sortedRecipes = this.recipes
  }

  private filterSubject = new BehaviorSubject<FilterRecipe>(this.filterRecipe);

  public getFilterObservable() {
    return this.filterSubject.asObservable();
  }

  public getRecipes(): Recipe[]{
    return this.sortedRecipes
  }
  public addRecipe(recipe: Recipe):void{
    this.id += 1;
    recipe.id = this.id
    this.recipes.push(recipe);
    this.sortRecipes(this.filterRecipe)
    this.filterSubject.next(this.filterRecipe)
  }

  public filterRecipes(sort: FilterRecipe): void{
    this.filterRecipe = sort;
    this.sortRecipes(this.filterRecipe)
    this.filterSubject.next(this.filterRecipe)
  }

  private sortRecipes(sort: FilterRecipe): void{
    if(sort === 'date'){
      this.sortedRecipes = [...this.recipes].sort((a,b) =>  a.date.localeCompare(b.date)) 
    } else{
      this.sortedRecipes = [...this.recipes]
    }
    
  }
}
