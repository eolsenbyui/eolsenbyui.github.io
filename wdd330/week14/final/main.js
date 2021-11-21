'use strict';

const URL = "https://api.datamuse.com/words?";

document.getElementById("form").addEventListener("submit", async (event) => {
    event.preventDefault()

    let query = [];
    let rhymes = document.getElementById("rhyme").value;
    let near = document.getElementById("near").checked;
    let starts = document.getElementById("starts").value;
    let synonym = document.getElementById("synonym").value;
    if (rhymes) {
        if (near) {
            query.push("rel_nry=" + rhymes);
        } else {
            query.push("rel_rhy=" + rhymes);
        }
    }

    if (starts) {
        query.push("sp=" + starts + "*");
    }

    if (synonym) {
        query.push("ml=" + synonym);
    }

    let body = document.getElementById("tbody");
    body.innerHTML = "";

    if (query.length === 0) { return; }


    let syllables = document.getElementById("syllables").value
    let nSyllables = 0;
    if (syllables !== "") {
        nSyllables = parseInt(syllables);
    }

    let nSyl = document.getElementById("nSyl");

    let nSylValue = nSyl.selectedOptions[0].innerText;

    let url = URL + query.join('&');

    let response = await fetch(url);

    if (response.ok) {
        let text = await response.text();

        document.getElementById("credits").classList.add("hidden");

        let array = JSON.parse(text);

        // Create table header
        let header = document.getElementById("header");
        // TODO: some results don't come back with syllables.  Adjust header accordingly
        header.innerHTML = "<th>Word</th><th>Score</th><th>Syllables</th>";
        /*
        for (let key in array[0]) {
            let th = document.createElement("th");
            th.innerText = key;
            header.appendChild(th);
        }
        */

        // Create table rows
        for (let item of array) {
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
    } else {
        // TODO: do some user-friendly error handling
    }
});