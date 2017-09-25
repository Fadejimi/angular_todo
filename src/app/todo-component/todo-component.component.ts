import {TodoDataService} from '../todo-data.service';
import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent {
  newTodo : Todo = new Todo();

  constructor(private todoDataService : TodoDataService) {
  }

  toogleTodoDataService(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  getAllTodos() {
    return this.todoDataService.getAllTodos();
  }
}
