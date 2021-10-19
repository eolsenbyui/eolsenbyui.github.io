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

    get comlpeted() {
        return this._completed;
    }

    set completed(value) {  // Boolean
        this._completed = value;
    }


    render() {
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = '<input type="checkbox" class="item-complete">';
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerText = this._content;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = '<button class="deleteTask">X</button>'
        tr.appendChild(td);

        return tr;
    }
}