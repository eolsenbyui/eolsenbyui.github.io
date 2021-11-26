'use strict';

import { getWordList } from "./model.js";

document.getElementById("form").addEventListener("submit", async (event) => {
    event.preventDefault()

    let wordList = await getWordList();

    if (wordList.length === 0) { return; }

    let body = document.getElementById("tbody");
    body.innerHTML = "";

    let syllables = document.getElementById("syllables").value
    let nSyllables = 0;
    if (syllables !== "") {
        nSyllables = parseInt(syllables);
    }

    let nSyl = document.getElementById("nSyl");

    let nSylValue = nSyl.selectedOptions[0].innerText;


    document.getElementById("credits").classList.add("hidden");

    // Create table header
    let thead = document.getElementById("thead");
    thead.innerHTML = "";
    for (let key in wordList[0]) {
        let th = document.createElement("th");
        if (key === "numSyllables") {
            th.innerText = "Syllables";
        } else {
            th.innerText = key.charAt(0).toUpperCase() + key.slice(1);
        }
        thead.appendChild(th);
    }

    // Create table rows
    for (let item of wordList) {
        if (nSylValue === "exactly") {
            if (item.numSyllables !== nSyllables) { continue; }
        } else {
            if (nSyllables > 0 && item.numSyllables >= nSyllables) { continue; }    // skip
        }

        let row = document.createElement("tr");
        body.appendChild(row);

        for (let value of Object.values(item)) {
            let cell = document.createElement("td");
            row.appendChild(cell);
            cell.innerText = value;
        }
    }
});


document.getElementById("nSyl").addEventListener("change", (event) => {
    let syllables = document.getElementById("syllables");
    let nSyl = document.getElementById("nSyl");
    if (nSyl.selectedOptions[0].innerText === "exactly") {
        syllables.min = 1;
    } else {
        syllables.min = 2;
    }
});


document.getElementById("syllables").addEventListener("input", (event) =>{
    let trailer = document.getElementById("trailer");
    if (event.target.value === '1') {
        trailer.innerText = "syllable";
    } else {
        trailer.innerText = "syllables";
    }
});


document.getElementById("rhyme").addEventListener("input", (event) => {
    // TODO: If empty, disable the syllables parameters
});
