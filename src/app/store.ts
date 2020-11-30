import {
  INCREMENT,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  CLEAR_TODOS,
} from './actions';
import { tassign } from 'tassign';
export interface IAppState {
  counter: number;
  todos: any[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  counter: 0,
  todos: [],
  lastUpdate: null,
};

class TodoActions {
  constructor(private state, private action) {}

  addTodo() {
    let newTodo = { id: this.state.todos.length + 1, title: this.action.title };
    return tassign(this.state, {
      todos: this.state.todos.concat(newTodo),
      lastUpdate: new Date(),
    });
  }

  toggleTodo() {
    const item = this.state.todos.find((i) => i.id === this.action.id);
    const index = this.state.todos.indexOf(item);

    const beforeItems = this.state.todos.slice(0, index);
    const afterItems = this.state.todos.slice(index + 1);
    const updatedItem = tassign(item, { isCompleted: !item.isCompleted });

    return tassign(this.state, {
      todos: [...beforeItems, updatedItem, ...afterItems],
    });
  }

  removeTodo() {
    return tassign(this.state, {
      todos: this.state.todos.filter((t) => t.id !== this.action.id),
      lastUpdate: new Date(),
    });
  }

  clearTodos() {
    return tassign(this.state, {
      todos: [],
      lastUpdate: new Date(),
    });
  }
}

export function rootReducer(state: IAppState, action): IAppState {
  const actions = new TodoActions(state, action);

  switch (action.type) {
    case INCREMENT:
      return tassign(state, { counter: state.counter + 1 });

    case ADD_TODO:
      return actions.addTodo();

    case TOGGLE_TODO:
      return actions.toggleTodo();

    case REMOVE_TODO:
      return actions.removeTodo();

    case CLEAR_TODOS:
      return actions.clearTodos();
  }
  return state;
}
