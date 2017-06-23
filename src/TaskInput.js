import React, { Component } from 'react';
import './TaskInput.css';

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { value: '' };
  }

  render() {
    return (
      <input type="text"
        placeholder="What needs to be done?"
        onChange={this.handleChange.bind(this)}
        onKeyPress={this.handleKeyPress.bind(this)}
        value={this.state.value}
      />
    );
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.addTask(this.state.value);
      this.setState({ value: '' });
    }
  }
}

export default TaskInput;
