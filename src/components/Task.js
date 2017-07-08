import React, { Component } from 'react';
import './Task.css';

const Task = ({ id, active, completeTask, deleteTask, description }) => {
  const classNames = ['task', (active ? 'active' : 'inactive')]

  return (
    <li id={id} className={classNames.join(' ')}>
      <button className="task-complete" onClick={completeTask}>
        {active ? ' ' : '✓'}
      </button>
        <span className="description">{description}</span>
      <button className="task-delete" onClick={deleteTask}>
        x
      </button>
    </li>
  );
}

export default Task;
