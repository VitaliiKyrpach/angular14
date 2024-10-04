import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeServiceService } from '../../services/recipe-service.service';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  public author: string = '';
  public date: string = '';
  public text: string ='';

  constructor(private recipeService: RecipeServiceService){}

  public addRecipe ():void{
    const newRecipe = {
      author: this.author,
      date: this.date,
      text: this.text,
    }
    
    this.recipeService.addRecipe(newRecipe)
    this.author = '';
    this.date = '';
    this.text = '';
  }
}
