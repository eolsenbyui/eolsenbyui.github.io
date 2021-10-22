'use strict'

import Todo from "./todo.js";

const todoList = [];
var filter = "All"

function displayTasksRemaining() {
    let length = todoList.filter(task => !task.completed).length;

    document.getElementById("tasksLeft").innerText = 
        length == 1 ? `${length} task remaining.`:`${length} tasks remaining.`;
}


function renderList() {
    let table = document.getElementsByTagName("table")[0];
    table.innerHTML = "";

    let index = 0;
    for (let todo of todoList) {
        switch(filter) {
            case "Active":
                if (!todo.completed) {
                    let row = todo.render(index++, onChecked, onDelete);
                    table.appendChild(row);
                }
                break;
            case "Completed":
                if (todo.completed) {
                    let row = todo.render(index++, onChecked, onDelete);
                    table.appendChild(row);
                }
                break;
            default:
                let row = todo.render(index++, onChecked, onDelete);
                table.appendChild(row);
        }
    }

    displayTasksRemaining();
}



document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("tasksLeft").innerText = `${todoList.length} tasks remaining.`
});



document.getElementById("add-task").addEventListener("submit", (event) => {
    event.preventDefault();
    let element = document.getElementById("new-task");

    if (element.value === "") { return; }
    
    let todo = new Todo(element.value);
    todoList.push(todo);

    // TODO: Write the todoList array to local storage.

    // Render the To-Do List
    renderList();

    element.value = ""; // Clear the input field
});



function onChecked(event) {
    let node = event.target.parentNode;
    let index = node.getAttribute("data-index");

    let task = todoList[index];
    task.completed = event.target.checked;

    if (task.completed) {
        node.nextSibling.classList.add("strike");
    } else {
        node.nextSibling.classList.remove("strike");
    }

    displayTasksRemaining();
}


function onDelete(event) {
    let node = event.target.parentNode;
    let index = node.getAttribute("data-index");

    todoList.splice(index, 1);

    renderList();
}


document.getElementById("allTasks").addEventListener("click", (event) =>{
    filter = "All";
    renderList()
});

document.getElementById("activeTasks").addEventListener("click", (event) =>{
    filter = "Active";
    renderList()
});

document.getElementById("completedTasks").addEventListener("click", (event) =>{
    filter = "Completed";
    renderList()
});
