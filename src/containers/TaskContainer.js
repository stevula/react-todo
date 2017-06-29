import React, { Component } from 'react';
import './TaskContainer.css';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import Menu from './Menu';

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
          tasks={this.filterTasks(this.state.filter)}
          completeTask={this.completeTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)} />
        <Menu
          tasks={this.state.tasks}
          activeFilter={this.state.filter}
          setFilter={this.setFilter.bind(this)}
          clearCompleted={this.clearCompleted.bind(this)} />
      </div>
    )
  }

  addTask(description) {
    if (!description) return false;

    const task = {
      description,
      id: String(Math.floor(Math.random() * 100000)), // TODO generate a uuid
      active: true,
    };

    this.setState({ tasks: this.state.tasks.concat(task) });
  }

  completeTask(e) {
    const tasksCopy = this.state.tasks.slice(0);
    const taskId = e.target.parentElement.id;
    const taskIndex = tasksCopy.findIndex(t => t.id === taskId);
    const taskCopy = Object.assign({}, tasksCopy[taskIndex]);
    taskCopy.active = !taskCopy.active;
    tasksCopy[taskIndex] = taskCopy;
    this.setState({ tasks: tasksCopy });
  }

  deleteTask(e) {
    const tasksCopy = this.state.tasks.slice(0);
    const taskId = e.target.parentElement.id;
    const taskIndex = tasksCopy.findIndex(t => t.id === taskId);
    tasksCopy.splice(taskIndex, 1);
    this.setState({ tasks: tasksCopy });
  }

  setFilter(filter) {
    if (!['all', 'active', 'complete'].includes(filter)) return false;
    this.setState({ filter });
  }

  filterTasks(filter) {
    return this.state.tasks.filter(t => {
      if (filter === 'active') return t.active;
      if (filter === 'complete') return !t.active;
      return true;
    });
  }

  clearCompleted() {
    this.setState({ tasks: this.state.tasks.filter(t => t.active === true) })
  }
}

export default TaskContainer;
