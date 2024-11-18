import { TodoReducer } from '../components/newTodoPage/store/reducers';
import { ProductsEffects } from '../components/storeNgRxPage/store/effects';
import { storeReducer } from '../components/storeNgRxPage/store/reducers';

export const store: any = {
  todos: TodoReducer,
  store: storeReducer,
};
export const effects = [
  ProductsEffects
];