import React, { Component } from 'react';
import './TasksFilter.css';

class TasksFilter extends Component {
  render() {
    return (
      <div className="task-filter">
        <button
          className={this.props.activeFilter === 'all' ? 'active' : ''}
          onClick={() => this.props.setFilter('all')}>
          All
        </button>
        <button
          className={this.props.activeFilter === 'active' ? 'active' : ''}
          onClick={() => this.props.setFilter('active')}>
          Active
        </button>
        <button
          className={this.props.activeFilter === 'complete' ? 'active' : ''}
          onClick={() => this.props.setFilter('complete')}>
          Completed
        </button>
      </div>
    );
  }
}

export default TasksFilter;
