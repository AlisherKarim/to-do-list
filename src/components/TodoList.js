import React, { Component } from 'react'
import Item from "./ToDoItem"
export default class TodoList extends Component {
    render() {
        const items = this.props.items
        const {handleEdit, handleDelete, handleClear} = this.props
        //console.log(items);
        return (
            <section style = {{margin: "4rem 0 0 0"}}>
                <h3>Your List:</h3>
                <ul className = "list-group">
                    {items.map((item) => <li className = "list-group-item" key = {item.id}><Item handleDelete = {handleDelete} handleEdit = {handleEdit} itemName = {item.text} itemId = {item.id}/></li>)}
                </ul>
                <button className = "btn btn-primary" onClick = {handleClear}>Clear All</button>
            </section>
        )
    }
}
