import { TodoReducer } from '../components/newTodoPage/store/reducers';
import { storeReducer } from '../components/storeNgRxPage/store/reducers';

export const store: any = {
  todos: TodoReducer,
  store: storeReducer,
};
