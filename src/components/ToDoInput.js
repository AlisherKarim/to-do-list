import React, { Component } from 'react'

export default class ToDoInput extends Component {
    render() {
        const { value , handleSubmit, handleChange} = this.props;
        return (
            <div>
                <form className = "form" onSubmit = {handleSubmit}>
                    <div className = "form-group">
                        <label htmlFor = "todoInput"><h3>Input ToDo</h3></label>
                        <input onChange = {handleChange}  className = "form-control" id = "todoInput" name = "todoInput" type = "text" placeholder = "Enter the ToDo" value = {value}></input>
                    </div>
                    <button className = "btn btn-primary" disabled = {value.length > 0 ? false: true} type = "submit">Add New To-Do</button>
                </form>
            </div>
        )
    }
}
