// const root = document.getElementById("root")
import { renderToDoItem } from "./utils/renderElem.js";
import { inputTodo, addBtn } from "./container/todo.js";
export let todoInitial = [
	{
		id: 0,
		isChecked: false,
		text: "Todo text",
	},
	{
		id: 1,
		isChecked: false,
		text: "Todo text",
	},
];
if (localStorage.getItem("todos") === null) {
	localStorage.setItem("todos", JSON.stringify(todoInitial));
}
let data = localStorage.getItem("todos");
export let todo = JSON.parse(data);

addBtn.addEventListener("click", () => {
	const dateNow = new Date();
	const dateTodo = `${dateNow.getDate()}.${
		dateNow.getMonth() + 1
	}.${dateNow.getFullYear()}`;
	const value = inputTodo.value;
	let newtodo = {
		id: `${value}-${todo.length}-${Math.random()}`,
		date: dateTodo,
		isChecked: false,
		text: value,
	};
	todo.push(newtodo);
	setName();
	renderToDoItem(newtodo);
	console.log(todo);
});

function setName() {
	localStorage.setItem("todos", JSON.stringify(todo));
}

todo.forEach((elem) => {
	renderToDoItem(elem);
});
