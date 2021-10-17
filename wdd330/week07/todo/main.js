'use strict'

document.getElementById("add-task").addEventListener("submit", (event) => {
    event.preventDefault();
    let element = document.getElementById("new-task");
    let newTask = element.value;
    element.value = "";
    console.log("Task Add submitted.")
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

