'use strict';

var characters = [];

var page = "";
var prev = null;
var next = null;

window.addEventListener("load", (event) => {
    page = "https://swapi.dev/api/people/"

    buildList(page);
});


document.getElementById("prev").addEventListener("click", (event) => {
    page = prev;

    buildList(page);
});

document.getElementById("next").addEventListener("click", (event) => {
    page = next;

    buildList(page)
});


document.getElementById("back-button").addEventListener("click", (event) => {
    let table = document.getElementById("characters");
    table.innerHTML = "";   // Clear out the table

    document.getElementById("instructions").classList.remove("hidden");

    renderList(table);

    document.getElementById("back").classList.add("hidden");    // Hide back button
    document.getElementById("prevnext").classList.remove("hidden");
});


async function getApi(url) {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw Error(response.statusText);
        }
    } catch(error) {
        console.error(error);
        //throw error;
    }
}


async function buildList(page) {
    console.log(`buildList(${page})`);
    let table = document.getElementById("characters");
    table.innerHTML = "";   // Clear out the table
    // TODO: Start a wait spinner

    characters = await getApi(page);
    console.log(characters);

    prev = characters.previous;
    next = characters.next;

    document.getElementById("prev").disabled = (prev === null);
    document.getElementById("next").disabled = (next === null);

    renderList(table);
}

function renderList(table) {
    let tableBody = document.createElement("tbody");
    table.appendChild(tableBody);

    for (let character of characters.results) {
        let tr = document.createElement("tr");
        tableBody.appendChild(tr);

        let td = document.createElement('td');
        tr.appendChild(td);

        td.innerText = character.name;
        td.dataset.detail = character.url;    // Attach the detail url
        td.style.cursor = "pointer";
        td.addEventListener("click", onTdClick);    // Add event handler for click/touch
    }
}

async function onTdClick(event) {
    document.getElementById("prevnext").classList.add("hidden");
    document.getElementById("instructions").classList.add("hidden");

    let table = document.getElementById("characters");
    table.innerHTML = "";   // Clear out the table

    const character = await getApi(event.target.dataset.detail);

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
