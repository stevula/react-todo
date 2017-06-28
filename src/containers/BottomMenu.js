import React, { Component } from 'react';
import './BottomMenu.css';
import TasksCounter from '../components/TasksCounter';
import TasksFilter from '../components/TasksFilter';

class BottomMenu extends Component {
  render() {
    const itemCount = this.props.itemCount;
    if (itemCount === 0) return null;

    return (
      <section className="bottom-menu">
        <TasksCounter itemCount={this.props.itemCount} />
        <TasksFilter setFilter={this.props.setFilter} />
        <button onClick={this.props.clearCompleted}>Clear completed</button>
      </section>
    );
  }
}

export default BottomMenu;
