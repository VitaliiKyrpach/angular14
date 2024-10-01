export interface Todo {
  title: string;
  completed: boolean;
  id: number;
}
export enum Filter {
  ALL = 'all',
  COMPLETED = 'completed',
  INCOMPLETED = 'inCompleted',
}
