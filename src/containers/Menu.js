import React, { Component } from 'react';
import './Menu.css';
import TasksCounter from '../components/TasksCounter';
import TasksFilter from '../components/TasksFilter';

class Menu extends Component {
  render() {
    const itemCount = this.props.itemCount;
    if (itemCount === 0) return null;

    return (
      <section className="menu">
        <TasksCounter itemCount={this.props.itemCount} />
        <TasksFilter activeFilter={this.props.activeFilter} setFilter={this.props.setFilter} />
        <div>
          {/* TODO show this only if there are completed tasks */}
          <button onClick={this.props.clearCompleted}>Clear completed</button>
        </div>
      </section>
    );
  }
}

export default Menu;
