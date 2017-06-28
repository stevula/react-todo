import React, { Component } from 'react';
import './TaskContainer.css';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import BottomMenu from './BottomMenu';

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'active',
      tasks: [],
    }
  }

  render() {
    return (
      <div className="task-container">
        <TaskInput addTask={this.addTask.bind(this)} />
        <TaskList
          tasks={this.filterTasks()}
          deleteTask={this.deleteTask.bind(this)} />
        <BottomMenu itemCount={this.state.tasks.length} setFilter={this.setFilter.bind(this)} />
      </div>
    )
  }

  addTask(description) {
    if (!description) return false;

    const task = {
      description,
      active: true,
    };

    this.setState({
      tasks: this.state.tasks.concat(task),
    });
  }

  deleteTask(e) {
    const tasks = this.state.tasks.slice(0);
    tasks.splice(e.target.id, 1);
    this.setState({ tasks });
  }

  setFilter(filter) {
    if (!['all', 'active', 'complete'].includes(filter)) return false;
    this.setState({ filter });
  }

  filterTasks() {
    return this.state.tasks.filter(t => {
      if (this.state.filter === 'active') return t.active;
      if (this.state.filter === 'complete') return !t.active;
      return true;
    });
  }
}

export default TaskContainer;
