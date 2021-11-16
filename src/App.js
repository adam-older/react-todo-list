import React, { Component } from "react";
import Header from "./components/Header";
import TodoForm from "./components/todo-components/TodoForm";
import Todos from "./components/todo-components/Todos";

import "./App.css";
import { nanoid } from "nanoid";
// import TodoItem from './components/todo-components/TodoItem';

export default class App extends Component {
  savedTodos = localStorage.getItem("todos");

  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Learn React",
        completed: true,
      },
      {
        id: 3,
        title: "Create todo app",
        completed: true,
      },
    ],
  };
  // const [state, setstate] = useState([]);
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", temp);
    }
  }
  componentDidMount() {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  toggleComplete = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      ],
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          // if (todo.id !== id) return todo;
          return todo.id !== id;
        }),
      ],
    });
  };
  submitTodo = (title) => {
    const newTodo = {
      id: nanoid(10),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <TodoForm submitTodo={this.submitTodo} />
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}
