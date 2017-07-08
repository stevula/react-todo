import { combineReducers } from 'redux';
import {
  FILTERS,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
} from '../actions';


const initialState = {
  filter: FILTERS.ALL,
  todos: [],
};

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.slice(0).concat({
        id: action.id,
        description: action.description,
        active: true,
      });
    case DELETE_TODO:
      const todos = state.slice(0);
      const taskIndex = todos.findIndex(todo => todo.id === action.id);
      todos.splice(taskIndex, 1);
      return todos;
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, { active: !todo.active });
        }
        return todo;
      });
    default:
      return state;
  }
};

function filter(state = FILTERS.ALL, action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const app = combineReducers({
  filter,
  todos,
});

export default app;
