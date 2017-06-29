import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render() {
    return (
      <div id={this.props.id} className="task {this.props.active ? 'active' ? 'inactive'}">
        <button className="task-complete" onClick={this.props.completeTask}>
          ✓
        </button>
          {this.props.description}
        <button className="task-delete" onClick={this.props.deleteTask}>
          X
        </button>
      </div>
    );
  }
}

export default Task;
