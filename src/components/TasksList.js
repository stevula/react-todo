import React, { Component } from 'react';
import './TasksList.css';
import FooterMenu from './FooterMenu';
import TaskContainer from '../containers/TaskContainer';
import TaskInputContainer from '../containers/TaskInputContainer';


const TasksList = ({ tasks, onClickToggleAll, onClickClearInactive }) => {
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
        deleteInactive={onClickClearInactive} />
    </div>
  );
};

export default TasksList;
