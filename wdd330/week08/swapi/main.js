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


document.getElementById("back-button").addEventListener("click", async (event) => {
    let table = document.getElementById("characters");
    table.innerHTML = "";   // Clear out the table

    document.getElementById("instructions").classList.remove("hidden");

    buildList(page);

    document.getElementById("back").classList.add("hidden");    // Hide back button
    document.getElementById("prevnext").classList.remove("hidden");
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
            td.dataset.detail = row.url;    // Attach the detail url
            td.style.cursor = "pointer";
            td.addEventListener("click", onTdClick);    // Add event handler for click/touch
        }
    }
}

async function onTdClick(event) {
    let response = await fetch(event.target.dataset.detail);

    if (response.ok) {
        document.getElementById("prevnext").classList.add("hidden");
        document.getElementById("instructions").classList.add("hidden");

        let table = document.getElementById("characters");
        table.innerHTML = "";   // Clear out the table

        let character = await response.json();

        let caption = document.createElement("caption");
        table.appendChild(caption);
        caption.innerText = character.name;
        caption.style.fontSize = "2em";
        
        let tableBody = document.createElement("tbody");
        table.appendChild(tableBody);

        addRow(tableBody, "Gender", character.gender);
        addRow(tableBody, "Eye color", character.eye_color);
        addRow(tableBody, "Hair color", character.hair_color);
        addRow(tableBody, "Skin color", character.skin_color);
        addRow(tableBody, "Birth year", character.birth_year);
        addRow(tableBody, "Height", character.height);
        addRow(tableBody, "Mass", character.mass);

        document.getElementById("back").classList.remove("hidden");    // Show back button
    }
}

function addRow(body, label, data) {
    let tr = document.createElement("tr");
    body.appendChild(tr);
    tr.classList.add("detail");

    let td = document.createElement('td');
    tr.appendChild(td);

    td.innerText = label;

    td = document.createElement('td');
    tr.appendChild(td);

    td.innerText = data;
}