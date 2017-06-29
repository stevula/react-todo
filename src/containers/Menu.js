import React, { Component } from 'react';
import './Menu.css';
import TasksCounter from '../components/TasksCounter';
import TasksFilter from '../components/TasksFilter';

class Menu extends Component {
  render() {
    if (this.props.tasks.length === 0) return null;

    return (
      <section className="menu">
        <TasksCounter itemCount={this.props.tasks.filter(t => t.active).length} />
        <TasksFilter activeFilter={this.props.activeFilter} setFilter={this.props.setFilter} />
        <div className="clear-completed">
          <button
            className={this.props.tasks.some(t => !t.active) ? '' : 'invisible'}
            onClick={this.props.clearCompleted}>
            Clear completed
          </button>
        </div>
      </section>
    );
  }
}

export default Menu;
