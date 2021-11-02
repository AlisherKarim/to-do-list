import React from 'react'
import { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'
import ToDoInput from "./components/ToDoInput"
//import ToDoItem from "./components/ToDoItem"
import TodoList from './components/TodoList'
//some comment

export default function App() {

  const [id, setID] = useState(uuidv4());
  const [items, setItems] = useState( () => {
    
    const localItems = localStorage.getItem("localItems");
    const jsonized = JSON.parse(localItems)
    return jsonized || [
      {id: uuidv4(), text: "wake up"},
      {id: uuidv4(), text: "do exercise"}
    ]
    }
  )
  const [item, setItem] = useState("");
  const [edit, setEdit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(edit === true){

      setItems(items.filter((CurrentItem) => {
        if(CurrentItem.id === id){
          CurrentItem.text = item
        }
        return true;
      }
      )
      )
      setItem("");
      setID(uuidv4());
      setEdit(false);
    }
    else{
      const newItem = {id: id, text: item}

      setItems([...items, newItem])
      setItem("")
      setID(uuidv4())
    }
  }
  const handleClear = () => {
    setItems([]);
  }
  const handleEdit = (idOfEditable) => {
    console.log(`Editing ${idOfEditable}`);
    const itemToBeEdited = items.find((CurrentItem) => {return CurrentItem.id === idOfEditable})
    setItem(itemToBeEdited.text);
    setID(idOfEditable)
    setEdit(true)
  }
  const handleDelete = (idOfDeletable) => {
    //console.log(id)
    setItems(items.filter((CurrentItem) => {return CurrentItem.id !== idOfDeletable}));
  }
  const handleChange = (event) => {
    setItem(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem("localItems", JSON.stringify(items));  
  }
  )

  return (
    <div>
      <div className = "container">
        <div className = "row">
          <div className = "col-10 mx-auto col-md-8 mt-5"> 
            <h2 className = "text-capitalize text-center">Your to-do list by <a class="text-lowercase" href = "https://github.com/alisherkarim">@alisherkarim</a></h2>
            <ToDoInput handleSubmit = {handleSubmit} value = {item} handleChange = {handleChange}/>
            <TodoList items = {items} handleClear = {handleClear} handleDelete = {handleDelete} handleEdit = {handleEdit}/>
          </div>
        </div>
      </div>
    </div>
  )
}


/*
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
        items: this.state.items.filter((item) => 
        {
          if(item.id === this.state.id){
            item.text = this.state.item
          }
          return true
        }),
          item: "",
          id: uuidv4(),
          edit: false
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
      edit: true,
      id: id
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
            <h2 className = "text-capitalize text-center">Your to-do list by <a class="text-lowercase" href = "https://github.com/alisherkarim">@alisherkarim</a></h2>
            <ToDoInput handleSubmit = {this.handleSubmit} value = {this.state.item} handleChange = {this.handleChange}/>
            <TodoList items = {this.state.items} handleClear = {this.handleClear} handleDelete = {this.handleDelete} handleEdit = {this.handleEdit}/>
          </div>
        </div>
      </div>
      
    )
  }
}

*/