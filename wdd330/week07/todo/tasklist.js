'use strict';

import Todo from "./todo.js";
import { displayTasksRemaining } from "./utility.js";

export default class TaskList extends Array {
    constructor() {
        super();
        var self = this;
    }

    // Render the task list
    render(filter) {
        let table = document.getElementsByTagName("table")[0];
        table.innerHTML = "";
    
        let index = 0;
        for (let todo of this) {
            switch(filter) {
                case "Active":
                    if (!todo.completed) {
                        let row = todo.render(index, this.onChecked, this.onDelete);
                        table.appendChild(row);
                    }
                    break;
                case "Completed":
                    if (todo.completed) {
                        let row = todo.render(index, this.onChecked, this.onDelete);
                        table.appendChild(row);
                    }
                    break;
                default:
                    let row = todo.render(index, this.onChecked, this.onDelete);
                    table.appendChild(row);
            }
    
            index++;
        }
        
        displayTasksRemaining(this)
    }


    ////////////////////////////////////
    // Callbacks used by the Todo class

    // On checkbox checked callback
    onChecked(event) {
        let node = event.target.parentNode;
        let index = node.getAttribute("data-index");

        let task = self[index];
        task.completed = event.target.checked;

        if (task.completed) {
            node.nextSibling.classList.add("strike");
        } else {
            node.nextSibling.classList.remove("strike");
        }

        localStorage.setItem(task.id, task.toString());     // Update the item in local storage

        displayTasksRemaining(self);
    }


    // On to-do item Delete callback
    onDelete(event) {
        let node = event.target.parentNode;
        let index = node.getAttribute("data-index");

        localStorage.removeItem(self[index].id);    // Remove item from local storage

        this.splice(index, 1);

        this.render(filter);
        displayTasksRemaining(self);
    }

}