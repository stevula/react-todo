import React, { Component } from 'react';
import './TasksFilter.css';

const TasksFilter = ({ activeFilter, setFilter }) => {
  return (
    <div className="task-filter">
      <button
        className={activeFilter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}>
        All
      </button>
      <button
        className={activeFilter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}>
        Active
      </button>
      <button
        className={activeFilter === 'complete' ? 'active' : ''}
        onClick={() => setFilter('complete')}>
        Completed
      </button>
    </div>
  );
}

export default TasksFilter;
