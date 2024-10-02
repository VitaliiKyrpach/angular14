export interface Todo {
    title: string;
    acomplished: boolean;
    id: number
}

export enum Filter{
    ALL = 'all',
    COMPLETED = 'completed',
    INCOMPLETED = 'inCompleted'
}