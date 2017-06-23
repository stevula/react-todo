import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render() {
    return (
      <div className="task">
        {this.props.description}
      </div>
    );
  }
}

export default Task;
