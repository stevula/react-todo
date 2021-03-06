export const FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETE: 'complete',
};

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_INACTIVE = 'DELETE_INACTIVE'
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const SET_FILTER = 'SET_FILTER';

export function addTask(description) {
  return {
    type: ADD_TODO,
    description,
    // TODO generate a uuid
    id: String(Math.floor(Math.random() * 100000)),
  };
};

export function deleteTask(id) {
  return { type: DELETE_TODO, id }
};

export function deleteInactive(id) {
  return { type: DELETE_INACTIVE, id }
};

export function toggleTaskActive(id) {
  return { type: TOGGLE_TODO, id }
};

export function toggleAll() {
  return { type: TOGGLE_ALL }
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter }
};
