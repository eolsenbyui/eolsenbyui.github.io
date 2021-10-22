'use strict'

import Todo from "./todo.js";

export function loadAll() {
    let list = [];
    let storage = window.localStorage;
    for (let i = 0; i < storage.length; i++) {
        let key = storage.key(i);
        let obj = JSON.parse(storage.getItem(key));
        list.push(obj);
    }

    return list;
}


export function addItem(todo) {
    let key = todo.date;
    let obj = JSON.stringify(todo);
    storage = window.localStorage;
    storage.setItem(key, obj);
}


export function removeItem(todo) {
    let key = todo.date;
    let storage = window.localStorage;
    storage.removeItem(key);
}