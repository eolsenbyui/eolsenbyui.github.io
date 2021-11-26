'use strict';

export default class View {

    renderList(wordList) {
        let body = document.getElementById("tbody");
        body.innerHTML = "";


        document.getElementById("credits").classList.add("hidden");

        // Create table header
        this.createTableHeader(wordList[0]);

        let nSyllables = this.getNumberOfSyllables();
        let nSylValue = this.getSyllableComparison();

        // Render table rows
        for (let item of wordList) {
            // Filter out rows that don't match the number of syllables requested
            if (nSyllables > 0 && nSylValue === "exactly") {
                if (item.numSyllables !== nSyllables) {
                    continue;   // skip rows that don't exactly match number of syllables specified
                }
            } else {
                if (nSyllables > 0 && item.numSyllables >= nSyllables) {
                    continue;   // Skip rows that have more syllables than requested
                }
            }

            let row = document.createElement("tr");
            body.appendChild(row);

            for (let value of Object.values(item)) {
                let cell = document.createElement("td");
                row.appendChild(cell);
                cell.innerText = value;
            }
        }
    }


    enableSyllables() {
        document.getElementById("nSyl").disabled = false;
        document.getElementById("syllables").disabled = false;
        document.getElementById("syllableRow").style.color = "#202020";
    }


    disableSyllables() {
        document.getElementById("nSyl").disabled = true;
        document.getElementById("syllables").disabled = true;
        document.getElementById("syllableRow").style.color = "#a0a0a0";
    }


    createTableHeader(row) {
        let thead = document.getElementById("thead");
        thead.innerHTML = "";
        for (let key in row) {
            let th = document.createElement("th");
            if (key === "numSyllables") {
                th.innerText = "Syllables";
            } else {
                th.innerText = key.charAt(0).toUpperCase() + key.slice(1);
            }
            thead.appendChild(th);
        }
    }


    getNumberOfSyllables() {
        let syllables = document.getElementById("syllables").value
        let nSyllables = 0;
        if (syllables) {
            nSyllables = parseInt(syllables);
        }

        return nSyllables;
    }


    getSyllableComparison() {
        let nSyl = document.getElementById("nSyl");

        return nSyl.selectedOptions[0].innerText;
    }
}