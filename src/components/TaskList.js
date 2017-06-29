import React, { Component } from 'react';
import './TaskList.css';
import Task from './Task';

class TaskList extends Component {
  render() {
    const tasks = this.props.tasks.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        description={task.description}
        completeTask={this.props.completeTask}
        deleteTask={this.props.deleteTask}
        active={task.active} />
    ));

    return (
      <section className="task-list">
        {tasks}
      </section>
    )
  }
}

export default TaskList;
