import React, { Component } from 'react';
import './App.css';
import TaskContainer from './TaskContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Todos</h1>
        </header>

        <main className="main">
          <TaskContainer />
        </main>
      </div>
    );
  }
}

export default App;
