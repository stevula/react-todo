import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Task />, div);
});
