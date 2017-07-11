import React, { Component } from 'react';
import './TasksList.css';
import FooterMenu from './FooterMenu';
import TaskContainer from '../containers/TaskContainer';
import TaskInputContainer from '../containers/TaskInputContainer';


const TasksList = ({ tasks, onClickToggleAll }) => {
  return (
    <div className="task-container">
      <div className="input-container">
        <button className="toggle-all" onClick={onClickToggleAll}>^</button>
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

  // clearCompleted() {
  //   this.setState({ tasks: this.state.tasks.filter(t => t.active === true) })
  // }
};

export default TasksList;
