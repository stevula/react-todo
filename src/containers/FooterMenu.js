import React, { Component } from 'react';
import './FooterMenu.css';
import FilterContainer from './FilterContainer';


class FooterMenu extends Component {
  render() {
    if (this.props.tasks.length === 0) return null;

    const itemCount = this.props.tasks.filter(t => t.active).length;

    return (
      <section className="menu">
        <div className="task-counter">
          {itemCount} item{itemCount === 1 ? '' : 's'} left
        </div>

        <div className="task-filter">
          <FilterContainer filter="all" active={true} />
          <FilterContainer filter="active" />
          <FilterContainer filter="completed" />
        </div>

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

export default FooterMenu;
