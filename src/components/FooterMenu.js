import React, { Component } from 'react';
import './FooterMenu.css';
import FilterContainer from '../containers/FilterContainer';


class FooterMenu extends Component {
  render() {
    const itemCount = this.props.tasks.length;
    if (itemCount === 0) return null;

    return (
      <section className="menu">
        <div className="task-counter">
          {itemCount} item{itemCount === 1 ? '' : 's'} left
        </div>

        <div className="task-filter">
          <FilterContainer filter="all" active={true} />
          <FilterContainer filter="active" />
          <FilterContainer filter="inactive" />
        </div>

        <div className="clear-inactive">
          <button
            className={this.props.tasks.some(t => !t.active) ? '' : 'invisible'}
            onClick={this.props.deleteInactive}>
            Clear inactive
          </button>
        </div>
      </section>
    );
  }
}

export default FooterMenu;
