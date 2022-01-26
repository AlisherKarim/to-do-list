import React, { Component } from 'react'

function dateToYMD(date) {
    // var strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = date.getDate();
    var m = date.toLocaleString("en-US", { month: "short" });
    var h = date.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit" });;
    return '' + (d <= 9 ? '0' + d : d) + ' ' + m + "  " + h;
}


export default class ToDoItem extends Component {
    render() {
        const {handleDelete, handleEdit, itemName, itemId, date, index} = this.props
        return (
            
            <tr>
                <th scope = "row">{index + 1}</th>
                <td>{dateToYMD(new Date(date))}</td>
                <td>{itemName}</td>
                <td>
                    <span className = "btn-group btn-group-sm float-right">
                        <button onClick = {() => handleDelete(itemId)} className = "btn btn-danger btn-sm">Delete</button>
                        <button className = "btn btn-info btn-sm" onClick = {() => handleEdit(itemId)}>Edit</button>
                    </span>
                </td>
            </tr>
        )
    }
}
