import React, { Component } from 'react';
import './App.css';
import TasksListContainer from '../containers/TasksListContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Todos</h1>
        </header>

        <main className="main">
          <TasksListContainer />
        </main>
      </div>
    );
  }
}

export default App;
