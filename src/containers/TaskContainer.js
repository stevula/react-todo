import React, { Component } from 'react';
import './TaskContainer.css';
import Menu from './Menu';
import InputContainer from './InputContainer';
import Task from '../components/Task';

class TaskContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'active',
      tasks: [],
    };
  }

  render() {
    return (
      <div className="task-container">
        <InputContainer
          toggleAllTaskStatus={this.toggleAllTaskStatus.bind(this)}
          tasks={this.state.tasks}
          addTask={this.addTask.bind(this)} />

        <ul className="task-list">
          {
            this.filterTasks(this.state.filter).map((task) => (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                completeTask={this.completeTask.bind(this)}
                deleteTask={this.deleteTask.bind(this)}
                active={task.active} />
            ))
          }
        </ul>

        <Menu
          tasks={this.state.tasks}
          activeFilter={this.state.filter}
          setFilter={this.setFilter.bind(this)}
          clearCompleted={this.clearCompleted.bind(this)} />
      </div>
    );
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
    console.log(filter)
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

  toggleAllTaskStatus() {
    let tasksCopy;

    if (this.state.tasks.some(task => task.active)) {
      // toggle active to inactive
      tasksCopy = this.state.tasks.map(task => Object.assign({}, task, { active: false }));
    } else {
      // toggle all to active
      tasksCopy = this.state.tasks.map(task => Object.assign({}, task, { active: true }));
    }

    this.setState({ tasks: tasksCopy });
  }
}

export default TaskContainer;
