import React, { Component } from 'react';
import './BottomMenu.css';

class BottomMenu extends Component {
  render() {
    const itemCount = this.props.itemCount;

    return (
      <section className="bottom-menu">
        {itemCount} item{itemCount === 1 ? '' : 's'} left | All Active Completed | Clear completed
      </section>
    );
  }
}

export default BottomMenu;
