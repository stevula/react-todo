import { combineReducers } from 'redux';
import {
  FILTERS,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  TOGGLE_ALL,
  SET_FILTER,
} from '../actions';


function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.slice(0).concat({
        id: action.id,
        description: action.description,
        active: true,
      });
    case DELETE_TODO:
      const tasks = state.slice(0);
      const taskIndex = tasks.findIndex(todo => todo.id === action.id);
      tasks.splice(taskIndex, 1);
      return tasks;
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, { active: !todo.active });
        }
        return todo;
      });
    case TOGGLE_ALL:
      if (state.some(task => task.active)) {
        // toggle active to inactive
        return state.map(task => Object.assign({}, task, { active: false }));
      } else {
        // toggle all to active
        return state.map(task => Object.assign({}, task, { active: true }));
      }
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

const reducers = combineReducers({
  filter,
  tasks,
});

export default reducers;
