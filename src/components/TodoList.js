import React, { Component } from 'react'
import Item from "./ToDoItem"
export default class TodoList extends Component {
    render() {
        const items = this.props.items
        const {handleEdit, handleDelete, handleClear} = this.props
        //console.log(items);
        return (
            <section style = {{margin: "4rem 0 0 0"}}>
                <h3 className='mx-2'>Your List:</h3>
                <div className='table-responsive'>
                    <table className = "table">
                        <thead >
                            <tr>
                                <th scope="col-1">#</th>
                                <th scope="col-2">Deadline</th>
                                <th scope="col-4">Todo</th>
                                <th scope="col-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => <Item key={item.id} index={index} handleDelete = {handleDelete} handleEdit = {handleEdit} itemName = {item.text} itemId = {item.id} date = {item.date}/>)}
                        </tbody>
                    </table>
                </div>
                <button className = "btn btn-primary mt-3" onClick = {handleClear}>Clear All</button>
            </section>
        )
    }
}
