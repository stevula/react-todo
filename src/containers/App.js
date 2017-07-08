import React, { Component } from 'react';
import './App.css';
import TasksList from '../components/TasksList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Todos</h1>
        </header>

        <main className="main">
          <TasksList />
        </main>
      </div>
    );
  }
}

export default App;
