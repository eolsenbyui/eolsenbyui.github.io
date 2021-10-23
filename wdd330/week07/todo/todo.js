'use strict';

export default class Todo {
    constructor(content = "", date=new Date().toISOString(), completed = false) {
        this._id = date;
        this._content = content;
        this._completed = completed;
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
        let checkBox = document.createElement("input");
        td.appendChild(checkBox);
        checkBox.type = "checkbox";
        checkBox.checked = this._completed;
        checkBox.classList.add("item-complete");

        checkBox.addEventListener("change", onChange);

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


    toString() {
        return `{"id": "${this._id}", "content": "${this._content}", "completed" : ${this._completed}}`
    }
}