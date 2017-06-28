import React, { Component } from 'react';
import './TasksCounter.css';

class TasksCounter extends Component {
  render() {
    return (
      <div>
        {this.props.itemCount} item{this.props.itemCount === 1 ? '' : 's'} left
      </div>
    );
  }
}

export default TasksCounter;