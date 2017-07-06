import React from 'react';
import ReactDOM from 'react-dom';
import TaskContainer from './TaskContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskContainer />, div);
});
