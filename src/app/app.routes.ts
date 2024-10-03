import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [{
    path: '', component: HomeComponent
    },{
    path: 'todoList', component: TodoComponent
    },{
    path: 'homework-3', component: RecipeComponent
}];
