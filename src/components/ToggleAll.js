import React, { Component } from 'react';
import './ToggleAll.css';

const ToggleAll = ({ toggleAllTaskStatus }) => {
  // TODO return null if there are no tasks
  // TODO increase opacity if all tasks are complete
  // TODO find a better char

  return (
    <button className="toggle-all" onClick={toggleAllTaskStatus}>
      ^
    </button>
  );
}

export default ToggleAll;
