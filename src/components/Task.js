import React, { Component } from 'react';
import './Task.css';

const Task = ({ active, description, onClickComplete, onClickDelete }) => {
  const classNames = ['task', (active ? 'active' : 'inactive')]

  return (
    <li className={classNames.join(' ')}>
      <button className="task-complete" onClick={onClickComplete}>{active ? ' ' : '✓'}</button>

      <span className="description">{description}</span>

      <button className="task-delete" onClick={onClickDelete}>x</button>
    </li>
  );
}

export default Task;
