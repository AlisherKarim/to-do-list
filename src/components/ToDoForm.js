import React from "react";
import BasicDateTimePicker from "./DateTimePicker";
import FullWidthTextField from "./InputMUI";

export default function ToDoForm(props) {
	if (!props.btnstate) {
		return (
			<div className="container">
				<div className="col text-center" style={{ marginTop: "2rem" }}>
					<button
						type="button"
						className="btn btn-primary btn-block"
						onClick={props.ifedit}>
						Add Task
					</button>
				</div>
			</div>
		);
	}

	return (
		<div>
			<form className="form" onSubmit={props.handleSubmit}>
				<div className="container form-group">
					<label htmlFor="todoInput">
						<h3>Input ToDo</h3>
					</label>
					<div className="row">
						<FullWidthTextField
							className="col-8"
							handleChange={props.handleChange}
							id="todoInput"
							name="todoInput"
							type="text"
							placeholder="Enter the ToDo"
							value={props.value}
						/>
						{/* <input onChange = {handleChange}  className = "col-8 form-control" id = "todoInput" name = "todoInput" type = "text" placeholder = "Enter the ToDo" value = {value}></input> */}
						<div className="col-4">
							<BasicDateTimePicker
								dateValue={props.dateValue}
								dateChangeHandler={props.dateChangeHandler}
							/>
						</div>
					</div>
				</div>
				<button
					className="btn btn-primary"
					disabled={props.value.length > 0 ? false : true}
					type="submit">
					Add New To-Do
				</button>
			</form>
		</div>
	);
}
