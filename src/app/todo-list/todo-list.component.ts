import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { IAppState } from '../store';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @select() todos;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  addTodo(input): void {
    if (!input.value) return;

    this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });

    input.value = '';
  }

  toggleTodo(todo): void {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo): void {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}
