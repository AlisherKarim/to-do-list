import React, { Component } from "react";
import BasicDateTimePicker from "./DateTimePicker";
import FullWidthTextField from "./InputMUI";

export default class ToDoInput extends Component {
	render() {
		const { value, dateValue, handleSubmit, handleChange, dateChangeHandler } =
			this.props;

		return (
			<div>
				<form className="form" onSubmit={handleSubmit}>
					<div className="container form-group">
						<label htmlFor="todoInput">
							<h3>Input ToDo</h3>
						</label>
						<div className="row">
							<FullWidthTextField
								className="col-8"
								handleChange={handleChange}
								id="todoInput"
								name="todoInput"
								type="text"
								placeholder="Enter the ToDo"
								value={value}
							/>
							{/* <input onChange = {handleChange}  className = "col-8 form-control" id = "todoInput" name = "todoInput" type = "text" placeholder = "Enter the ToDo" value = {value}></input> */}
							<div className="col-4">
								<BasicDateTimePicker
									dateValue={dateValue}
									dateChangeHandler={dateChangeHandler}
								/>
							</div>
						</div>
					</div>
					<button
						className="btn btn-primary"
						disabled={value.length > 0 ? false : true}
						type="submit">
						Add New To-Do
					</button>
				</form>
			</div>
		);
	}
}
