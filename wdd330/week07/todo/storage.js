'use strict';

import Todo from "./todo.js";

export function loadAll() {
    let list = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let item = localStorage.getItem(key);
        let obj = JSON.parse(item);
        let todo = new Todo(obj.content, obj.id, obj.completed);
        list.push(todo);
    }

    return list;
}
