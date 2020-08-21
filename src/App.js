import React, { Component } from 'react'
import Todos from './components/todo-components/Todos';
import Header from './components/Header';

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

  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })})
}

  delTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => {
      if (todo.id !== id) return todo;
    })})
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo} />
        </div>
      </div>
    )
  }
}

