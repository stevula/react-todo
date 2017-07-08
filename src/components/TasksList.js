import React, { Component } from 'react';
import './TasksList.css';
import FooterMenu from './FooterMenu';
import TaskContainer from '../containers/TaskContainer';
import TaskInputContainer from '../containers/TaskInputContainer';


const TasksList = ({ tasks }) => {
  return (
    <div className="task-container">
      <div className="input-container">
        <button className="toggle-all" onClick={this.toggleAllTaskStatus}>^</button>
        <TaskInputContainer />
      </div>

      <ul className="task-list">
        {
          tasks.map((task) => (
            <TaskContainer
              key={task.id}
              id={task.id}
              active={task.active}
              description={task.description} />
          ))
        }
      </ul>

      <FooterMenu
        tasks={tasks}
        activeFilter={'all'}
        clearCompleted={this.clearCompleted} />
    </div>
  );

  // completeTask(e) {
  //   const tasksCopy = this.state.tasks.slice(0);
  //   const taskId = e.target.parentElement.id;
  //   const taskIndex = tasksCopy.findIndex(t => t.id === taskId);
  //   const taskCopy = Object.assign({}, tasksCopy[taskIndex]);
  //   taskCopy.active = !taskCopy.active;
  //   tasksCopy[taskIndex] = taskCopy;
  //   this.setState({ tasks: tasksCopy });
  // }

  // deleteTask(e) {
  //   const tasksCopy = this.state.tasks.slice(0);
  //   const taskId = e.target.parentElement.id;
  //   const taskIndex = tasksCopy.findIndex(t => t.id === taskId);
  //   tasksCopy.splice(taskIndex, 1);
  //   this.setState({ tasks: tasksCopy });
  // }

  // clearCompleted() {
  //   this.setState({ tasks: this.state.tasks.filter(t => t.active === true) })
  // }

  // toggleAllTaskStatus() {
  //   let tasksCopy;

  //   if (this.state.tasks.some(task => task.active)) {
  //     // toggle active to inactive
  //     tasksCopy = this.state.tasks.map(task => Object.assign({}, task, { active: false }));
  //   } else {
  //     // toggle all to active
  //     tasksCopy = this.state.tasks.map(task => Object.assign({}, task, { active: true }));
  //   }

  //   this.setState({ tasks: tasksCopy });
  // }

  // setFilter(filter) {
  //   if (!['all', 'active', 'complete'].includes(filter)) return false;
  //   this.setState({ filter });
  // }

  // filterTasks(filter) {
  //   return this.state.tasks.filter(t => {
  //     if (filter === 'active') return t.active;
  //     if (filter === 'complete') return !t.active;
  //     return true;
  //   });
  // }
};

export default TasksList;
