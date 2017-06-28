import React, { Component } from 'react';
import './TaskList.css';
import Task from './Task';

class TaskList extends Component {
  render() {
    const tasks = this.props.tasks.map((task, index) => (
      <Task
        key={index}
        id={index}
        description={task.description}
        deleteTask={this.props.deleteTask}
      />
    ));

    return (
      <section className="task-list">
        {tasks}
      </section>
    )
  }
}

export default TaskList;
