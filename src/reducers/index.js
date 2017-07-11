import { combineReducers } from 'redux';
import {
  FILTERS,
  ADD_TODO,
  DELETE_TODO,
  DELETE_INACTIVE,
  TOGGLE_TODO,
  TOGGLE_ALL,
  SET_FILTER,
} from '../actions';


function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.id,
        description: action.description,
        active: true,
      });
    case DELETE_TODO:
      return state.filter(task => task.id !== action.id)
    case DELETE_INACTIVE:
      return state.filter(task => task.active);
    case TOGGLE_TODO:
      return state.map((task) => {
        if (task.id === action.id) {
          return Object.assign({}, task, { active: !task.active });
        }
        return task;
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
