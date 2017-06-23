import React, { Component } from 'react';
import './TaskContainer.css';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }

  render() {
    return (
      <div className="task-container">
        <TaskInput addTask={this.addTask.bind(this)} />
        <TaskList tasks={this.state.tasks} />
      </div>
    )
  }

  addTask(description) {
    this.setState({
      tasks: this.state.tasks.concat(description),
    })
  }
}

export default TaskContainer;
