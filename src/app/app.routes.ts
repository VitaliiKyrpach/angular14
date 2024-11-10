import { Routes } from '@angular/router';
import { TodoComponent } from './components/todoPage/todo/todo.component';
import { RecipeComponent } from './components/recipePage/recipe/recipe.component';
import { HomeComponent } from './components/shared/home/home.component';
import { CartComponent } from './components/cartPage/cart/cart.component';
import { ProductsComponent } from './components/productsPage/products/products.component';
import { ParentComponent } from './components/cartRefPage/parent/parent.component';
import { GameComponent } from './components/gamePage/game/game.component';
import { ProdComponent } from './components/prodTablePage/prod/prod.component';
import { AuthComponent } from './components/authPage/auth/auth.component';
import { StoreComponent } from './components/storePage/store/store.component';
import { StoreAComponent } from './components/storePage/store-a/store-a.component';
import { StoreBComponent } from './components/storePage/store-b/store-b.component';
import { StoreCComponent } from './components/storePage/store-c/store-c.component';

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
    component: ProdComponent,
  },
  {
    path: 'homework-7',
    component: AuthComponent,
  },
  {
    path: 'homework-8',
    component: StoreComponent,
    children: [
      {
        path: 'storeA',
        component: StoreAComponent,
      },
      {
        path: 'storeB',
        component: StoreBComponent,
      },
      {
        path: 'storeC',
        component: StoreCComponent,
      },
    ],
  },
];
