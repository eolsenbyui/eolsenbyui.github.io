'use strict'

import Todo from "./todo.js";

const todoList = [];

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("tasksLeft").innerText = `${todoList.length} tasks remaining.`
});

document.getElementById("add-task").addEventListener("submit", (event) => {
    event.preventDefault();
    let element = document.getElementById("new-task");
    let newTask = element.value;
    
    let todo = new Todo(newTask);
    todoList.push(todo);

    // TODO: Write the todoList array to local storage.

    // Render the To-Do List
    let table = document.getElementsByTagName("table")[0];
    table.innerHTML = "";

    let index = 0;
    for (todo of todoList) {
        let row = todo.render();
        row.index = index++;
        table.appendChild(row);
    }

    element.value = ""; // Clear the input field

    document.getElementById("tasksLeft").innerText = `${todoList.length} tasks remaining.`
});

let elements = document.getElementsByClassName("deleteTask");
Array.from(elements).forEach( (element) => {
    element.addEventListener("click", (event) => {
        console.log("Delete To-Do Item clicked.")
    });
});

elements = document.getElementsByClassName("item-complete");
Array.from(elements).forEach( (element) => {
    element.addEventListener("click", (event) => {
        let checked = event.target.checked;
        console.log(checked ? "Checkbox checked." : "Checkbox unchecked.");
    });
});

