import React, { Component } from 'react';
import './TaskContainer.css';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import BottomMenu from './BottomMenu';

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
        <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask.bind(this)} />
        {this.state.tasks.length > 0 ? <BottomMenu itemCount={this.state.tasks.length} /> : null}
      </div>
    )
  }

  addTask(description) {
    if (!description) return null;

    this.setState({
      tasks: this.state.tasks.concat(description),
    });
  }

  deleteTask(e) {
    e.preventDefault();
    const tasks = this.state.tasks.slice(0);
    tasks.splice(e.target.id, 1);
    this.setState({ tasks });
  }
}

export default TaskContainer;
