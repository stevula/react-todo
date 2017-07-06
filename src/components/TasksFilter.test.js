import React from 'react';
import ReactDOM from 'react-dom';
import TasksFilter from './TasksFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TasksFilter />, div);
});
