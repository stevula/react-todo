import React, { Component } from 'react';
import './InputContainer.css';
import ToggleAll from '../components/ToggleAll';
import TaskInput from '../components/TaskInput';

class InputContainer extends Component {
  render() {
    return (
      <div className="input-container">
        <ToggleAll toggleAllTaskStatus={this.props.toggleAllTaskStatus} />
        <TaskInput addTask={this.props.addTask} />
      </div>
    );
  }
}

export default InputContainer;
