import { Injectable } from '@angular/core';
import { FilterTodo, Todo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private id: number = 1;
  private filter: FilterTodo = FilterTodo.ALL

  public todoS: Todo[] = [
    {title: 'learn angular',
      acomplished: false,
      id: 1
    }
  ]

  public filteredTodos: Todo[] = []

  constructor(){
    this.filteredTodos = this.todoS
  }

  

  public getTodos(): Todo[]{
    return this.filteredTodos
  }
  public addTodo(title: string):void{
    this.id += 1;
    const newTodo ={
      title,
      acomplished: false,
      id: this.id
    }
    this.todoS.push(newTodo)
    this.calcFilter(this.filter)
  }

  public deleteTodo(id: number): void{
    this.todoS = this.todoS.filter(todo=>
      todo.id != id
    )
    this.calcFilter(this.filter)
  }

  public changeTodo(id: number): void{
    this.todoS = this.todoS.map(todo=>{
      if(todo.id == id){
        return {...todo, acomplished: !todo.acomplished}
      }
      return todo
    })
    this.calcFilter(this.filter)
  }

  public filterTodo(filter: FilterTodo): void{
    this.filter = filter
    this.calcFilter(this.filter)
  }

  private calcFilter(filter: FilterTodo): void{
    if(filter === FilterTodo.COMPLETED){
      this.filteredTodos = this.todoS.filter(todo=>
        todo.acomplished === true
      )
    } else if(filter === FilterTodo.INCOMPLETED){
      this.filteredTodos = this.todoS.filter(todo=>
        todo.acomplished === false
      )
    } else{
      this.filteredTodos = this.todoS
    }
  }
}
