import React, { Component } from 'react';
import './Main.css';
import TaskContainer from './TaskContainer';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <TaskContainer />
      </main>
    );
  }
}

export default Main;
