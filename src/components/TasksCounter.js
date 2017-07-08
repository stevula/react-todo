import React, { Component } from 'react';
import './TasksCounter.css';

const TasksCounter = ({ itemCount }) => {
  return (
    <div className="task-counter">
      {itemCount} item{itemCount === 1 ? '' : 's'} left
    </div>
  );
}

export default TasksCounter;
