'use strict';

document.getElementById("form").addEventListener("submit", async (event) => {
    event.preventDefault()

    let word = document.getElementById("rhyme").value;
    if (word === "") { return; }

    let syllables = document.getElementById("syllables").value
    let nSyllables = 0;
    if (syllables !== "") {
        nSyllables = parseInt(syllables);
    }

    let url = "https://api.datamuse.com/words?rel_rhy=" + word;

    let response = await fetch(url);

    if (response.ok) {
        let text = await response.text();

        document.getElementById("credits").classList.add("hidden");

        let array = JSON.parse(text);

        // Create table header
        let header = document.getElementById("header");
        header.innerHTML = "";
        for (let key in array[0]) {
            let th = document.createElement("th");
            th.innerText = key;
            header.appendChild(th);
        }

        // Create table rows
        let body = document.getElementById("body");
        body.innerHTML = "";

        for (let item of array) {
            if (nSyllables > 0 && item.numSyllables >= nSyllables) { continue; }    // skip

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