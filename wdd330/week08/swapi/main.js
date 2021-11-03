'use strict';

var characters = [];

var page = "";
var prev = null;
var next = null;

window.addEventListener("load", async (event) => {
    page = "https://swapi.dev/api/people/"

    buildList(page);
});


document.getElementById("prev").addEventListener("click", async (event) => {
    page = prev;

    buildList(page);
});

document.getElementById("next").addEventListener("click", async (event) => {
    page = next;

    buildList(page)
});

async function buildList(page) {
    let response = await fetch(page);

    if (response.ok) {
        characters = await response.json();
        prev = characters.previous;
        next = characters.next;

        document.getElementById("prev").disabled = (prev === null);
        document.getElementById("next").disabled = (next === null);

        let table = document.getElementById("characters");
        table.innerHTML = "";   // Clear out the table

        let tableBody = document.createElement("tbody");
        table.appendChild(tableBody);

        for (let row of characters.results) {
            let tr = document.createElement("tr");
            tableBody.appendChild(tr);

            let td = document.createElement('td');
            tr.appendChild(td);

            td.innerText = row.name;
        }
    }
}