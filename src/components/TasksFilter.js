import React, { Component } from 'react';
import './TasksFilter.css';

class TasksFilter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.setFilter('all')}>All</button>
        <button onClick={() => this.props.setFilter('active')}>Active</button>
        <button onClick={() => this.props.setFilter('complete')}>Completed</button>
      </div>
    );
  }
}

export default TasksFilter;
