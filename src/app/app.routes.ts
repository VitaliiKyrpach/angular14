import { Routes } from '@angular/router';
import { TodoComponent } from './components/todoPage/todo/todo.component';
import { RecipeComponent } from './components/recipePage/recipe/recipe.component';
import { HomeComponent } from './components/shared/home/home.component';
import { CartComponent } from './components/cartPage/cart/cart.component';
import { ProductsComponent } from './components/productsPage/products/products.component';
import { ParentComponent } from './components/cartRefPage/parent/parent.component';
import { GameComponent } from './components/gamePage/game/game.component';
import { ProdTableComponent } from './components/prodTablePage/prod-table/prod-table.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todoList',
    component: TodoComponent,
  },
  {
    path: 'homework-3',
    component: RecipeComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'homework-4',
    component: ProductsComponent,
  },
  {
    path: 'homework-5',
    component: ParentComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'homework-6',
    component: ProdTableComponent,
  },
];
