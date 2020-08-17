import React, { Component } from 'react'
import uuid from 'uuid'
import ToDoInput from "./components/ToDoInput"
import ToDoItem from "./components/ToDoItem"
import TodoList from './components/TodoList'
//some comment
export default class App extends Component {
  render() {
    return (
      <div>
        <TodoList/>
        <ToDoInput/>
        <ToDoItem/>
        <h1>hello from app</h1>
      </div>
    )
  }
}

