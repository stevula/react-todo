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
          completeTask={this.completeTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)} />
        <BottomMenu
          itemCount={this.state.tasks.length}
          setFilter={this.setFilter.bind(this)}
          clearCompleted={this.clearCompleted.bind(this)} />
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

  completeTask(e) {
    const tasksCopy = this.state.tasks.slice(0);
    const taskId = e.target.parentElement.id;
    const taskCopy = Object.assign({}, tasksCopy[taskId]);
    taskCopy.active = false;
    tasksCopy[taskId] = taskCopy;
    this.setState({ tasks: tasksCopy });
  }

  deleteTask(e) {
    const tasksCopy = this.state.tasks.slice(0);
    const taskId = e.target.parentElement.id;
    tasksCopy.splice(taskId, 1);
    this.setState({ tasks: tasksCopy });
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

  clearCompleted() {
    this.setState({ tasks: this.state.tasks.filter(t => t.active === true) })
  }
}

export default TaskContainer;
