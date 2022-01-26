import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import ToDoInput from "./components/ToDoInput";
import ToDoForm from "./components/ToDoForm";
//import ToDoItem from "./components/ToDoItem"
import TodoList from "./components/TodoList";
//some comment

export default function App() {
	const [id, setID] = useState(uuidv4());
	const [initButton, setButton] = useState(false);
	const [items, setItems] = useState(() => {
		const localItems = localStorage.getItem("localItems");
		const jsonized = JSON.parse(localItems);
		return (
			jsonized || [
				{ id: uuidv4(), text: "wake up", date: new Date() },
				{ id: uuidv4(), text: "do exercise", date: new Date() },
			]
		);
	});
	const [item, setItem] = useState("");
	const [edit, setEdit] = useState(false);
	const [date, setDate] = useState(new Date());

	const handleSubmit = (event) => {
		event.preventDefault();
		if (edit === true) {
			setItems(
				items
					.filter((CurrentItem) => {
						if (CurrentItem.id === id) {
							CurrentItem.text = item;
							CurrentItem.date = date;
						}
						return true;
					})
					.sort(function (a, b) {
						// var dateA = new Date(a.date_prop).getTime();
						// var dateB = new Date(b.date_prop).getTime();
						// return dateA < dateB ? 1 : -1; // ? -1 : 1 for ascending/increasing order
						return Date.parse(a.date) - Date.parse(b.date);
					})
			);
			setButton(false);
			setItem("");
			setDate(new Date());
			setID(uuidv4());
			setEdit(false);
		} else {
			const newItem = { id: id, text: item, date: date };

			setItems(
				[...items, newItem].sort(function (a, b) {
					// var dateA = new Date(a.date_prop).getTime();
					// var dateB = new Date(b.date_prop).getTime();
					// return dateA < dateB ? 1 : -1; // ? -1 : 1 for ascending/increasing order
					return Date.parse(a.date) - Date.parse(b.date);
				})
			);
			setItem("");
			setDate(new Date());
			setID(uuidv4());
      setButton(false);
		}
	};

	const handleEditor = () => {
		setButton(true);
	};

	const handleClear = () => {
		setItems([]);
	};
	const handleEdit = (idOfEditable) => {
		console.log(`Editing ${idOfEditable}`);
		const itemToBeEdited = items.find((CurrentItem) => {
			return CurrentItem.id === idOfEditable;
		});
    setButton(false);
		setItem(itemToBeEdited.text);
		setDate(itemToBeEdited.date);
		setID(idOfEditable);
		setEdit(true);
	};
	const handleDelete = (idOfDeletable) => {
		//console.log(id)
		setItems(
			items.filter((CurrentItem) => {
				return CurrentItem.id !== idOfDeletable;
			})
		);
	};
	const handleChange = (event) => {
		setItem(event.target.value);
	};
	const dateChangeHandler = (date) => {
		setDate(date);
	};

	useEffect(() => {
		localStorage.setItem("localItems", JSON.stringify(items));
	});

	return (
		<div className="container">
			<div className="row">
				<div className="col mx-auto col-md-9 mt-5">
					<h2 className="text-capitalize text-center">
						Your to-do list by{" "}
						<a class="text-lowercase" href="https://github.com/alisherkarim">
							@alisherkarim
						</a>
					</h2>
					<ToDoForm
						dateChangeHandler={dateChangeHandler}
						handleSubmit={handleSubmit}
						value={item}
						dateValue={date}
						handleChange={handleChange}
						ifedit={handleEditor}
						btnstate={initButton}
					/>
					<TodoList
						items={items}
						handleClear={handleClear}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
					/>
				</div>
			</div>
		</div>
	);
}
