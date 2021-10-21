'use strict'

export default class Todo {
    constructor(content = "") {
        this._id = Date();
        this._content = content;
        this._completed = false;
    }

    get id() {  // Date
        return this._id;
    }

    get content() {     // String
        return this._content;
    }

    set content(value) {
        this._content = value;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {  // Boolean
        this._completed = value;
    }


    render(index, onChange, onDelete) {
        let tr = document.createElement('tr');
        tr.setAttribute("data-index", index);

        // Create the checkbox cell and the checkbox
        let td = document.createElement('td');
        td.setAttribute("data-index", index);

        // Create the checkbox
        let input = document.createElement("input");
        td.appendChild(input);
        input.type = "checkbox";
        input.checked = this._completed;
        input.classList.add("item-complete");

        //input.addEventListener("change", this._completeTodo);   // Handle check and uncheck
        input.addEventListener("change", onChange);

        tr.appendChild(td);

        // Create the text cell
        td = document.createElement('td');
        td.setAttribute("data-index", index);
        td.classList.add("task-input")
        td.innerText = this._content;
        if (this._completed) {
            td.classList.add("strike")
        }
        tr.appendChild(td);

        // Create the delete button cell
        td = document.createElement('td');
        td.setAttribute("data-index", index);
        let button = document.createElement("button")
        button.classList.add("deleteTask");
        button.innerText = "X";
        button.addEventListener("click", onDelete);
        td.appendChild(button);
        tr.appendChild(td);

        return tr;
    }
}