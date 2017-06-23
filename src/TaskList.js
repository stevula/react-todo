import React, { Component } from 'react';
import './TaskList.css';
import Task from './Task';

class TaskList extends Component {
  render() {
    const tasks = this.props.tasks.map((task, index) => {
      return <Task key={index} description={task}></Task>
    });

    return (
      <section className="task-list">
        {tasks}
      </section>
    )
  }
}

export default TaskList;
