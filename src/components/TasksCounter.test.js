import React from 'react';
import ReactDOM from 'react-dom';
import TasksCounter from './TasksCounter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TasksCounter />, div);
});
