import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render() {
    const classNames = ['task', (this.props.active ? 'active' : 'inactive')]

    return (
      <li id={this.props.id} className={classNames.join(' ')}>
        <button className="task-complete" onClick={this.props.completeTask}>
          ✓
        </button>
          {this.props.description}
        <button className="task-delete" onClick={this.props.deleteTask}>
          x
        </button>
      </li>
    );
  }
}

export default Task;
