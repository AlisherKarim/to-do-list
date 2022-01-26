import React, { Component } from "react";

function dateToYMD(date) {
	const da = date.toLocaleString("en-US", {
		day: "2-digit",
		month: "short",
		hour: "2-digit",
		minute: "2-digit",
	});

	return da;
}

export default class ToDoItem extends Component {
	render() {
		const { handleDelete, handleEdit, itemName, itemId, date, index } =
			this.props;
		return (
			<tr>
				<th scope="row">{index + 1}</th>
				<td>{dateToYMD(new Date(date))}</td>
				<td>{itemName}</td>
				<td>
					<span className="btn-group btn-group-sm float-right">
						<button
							onClick={() => handleDelete(itemId)}
							className="btn btn-danger btn-sm">
							Delete
						</button>
						<button
							className="btn btn-info btn-sm"
							onClick={() => handleEdit(itemId)}>
							Edit
						</button>
					</span>
				</td>
			</tr>
		);
	}
}
