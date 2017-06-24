import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render() {
    return (
      <div className="task">
        {this.props.description}
        <button
          id={this.props.id}
          className="task-delete"
          onClick={this.props.deleteTask}
        >
          X
        </button>
      </div>
    );
  }
}

export default Task;
