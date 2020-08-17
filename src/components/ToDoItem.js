import React, { Component } from 'react'

export default class ToDoItem extends Component {
    render() {
        const {handleDelete, handleEdit, itemName, itemId} = this.props
        return (
            <div>
                {itemName}
                <span className = "btn-group btn-group-sm float-right">
                    <button onClick = {() => handleDelete(itemId)} className = "btn btn-danger btn-sm">Delete</button>
                    <button className = "btn btn-info btn-sm" onClick = {() => handleEdit(itemId)}>Edit</button>
                </span>
            </div>
        )
    }
}
