import React from 'react';
import ReactDOM from 'react-dom';
import InputContainer from './InputContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputContainer />, div);
});
