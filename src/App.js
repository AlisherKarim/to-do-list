import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid'
import ToDoInput from "./components/ToDoInput"
//import ToDoItem from "./components/ToDoItem"
import TodoList from './components/TodoList'
//some comment
export default class App extends Component {
  state = {
    items : [
      {id: uuidv4(), text: "wake up"},
      {id: uuidv4(), text: "do exercise"}
    ],
    id : uuidv4(),
    item: "",
    edit: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.edit === true){
      this.setState({
        
      })
    }
    else{
      const newItem = {id: this.state.id, text: this.state.item}
      this.setState({
        items: [...this.state.items, newItem],
        item: "",
        id : uuidv4()
      })
    }
  }
  handleClear = () => {
    this.setState({
      items: []
    })
  }
  handleEdit = (id) => {
    console.log(`Editing ${id}`);
    const itemToBeEdited = this.state.items.find((item) => {return item.id === id})
    this.setState({
      item : itemToBeEdited.text,
      edit: true
    })
  }
  handleDelete = (id) => {
    //console.log(id)
    this.setState({
      items: this.state.items.filter((item) => {return item.id !== id})
    })
  }
  handleChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }
  render() {
    //console.log(this.state.items)
    return (
      
      <div className = "container">
        <div className = "row">
          <div className = "col-10 mx-auto col-md-8 mt-5"> 
            <h2 className = "text-capitalize text-center">To-Do List Project</h2>
            <ToDoInput handleSubmit = {this.handleSubmit} value = {this.state.item} handleChange = {this.handleChange}/>
            <TodoList items = {this.state.items} handleClear = {this.handleClear} handleDelete = {this.handleDelete} handleEdit = {this.handleEdit}/>
          </div>
        </div>
      </div>
      
    )
  }
}

