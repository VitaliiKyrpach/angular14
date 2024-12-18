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
import { StoreComponentComponent } from './components/storePage/store-component/store-component.component';
import { TodoStoreComponent } from './components/newTodoPage/todo/todo.component';
import { StoreNgCompComponent } from './components/storeNgRxPage/store-ng-comp/store-ng-comp.component';
import { StoreNgComponent } from './components/storeNgRxPage/store-ng/store-ng.component';
import { TasksComponent } from './components/testTasksPage/tasks/tasks.component';
import { SecondComponent } from './components/testTasksPage/second/second.component';

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
        path: '',
        redirectTo: 'storeA',
        pathMatch: 'full',
      },
      {
        path: 'storeA',
        component: StoreComponentComponent,
        data: { store: 'storeA' },
      },
      {
        path: 'storeB',
        component: StoreComponentComponent,
        data: { store: 'storeB' },
      },
      {
        path: 'storeC',
        component: StoreComponentComponent,
        data: { store: 'storeC' },
      },
    ],
  },
  {
    path: 'homework-9',
    component: StoreNgComponent,
    children: [
      {
        path: '',
        redirectTo: 'storeA',
        pathMatch: 'full',
      },
      {
        path: 'storeA',
        component: StoreNgCompComponent,
        data: { store: 'storeA' },
      },
      {
        path: 'storeB',
        component: StoreNgCompComponent,
        data: { store: 'storeB' },
      },
      {
        path: 'storeC',
        component: StoreNgCompComponent,
        data: { store: 'storeC' },
      },
    ],
  },
  {
    path: 'todoStore',
    component: TodoStoreComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
    children: [
      {
        path: ':id',
        component: SecondComponent,
      },
    ],
  },
];
