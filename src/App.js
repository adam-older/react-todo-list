import React, { Component } from 'react'
import Todos from './components/Todos';

import './App.css';

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Learn React',
        completed: false
      },
      {
        id: 3,
        title: 'Create todo app',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    )
  }
}

