'use strict';

import { getWordList } from "./model.js";
import View from './view.js'

const view = new View();

view.disableSyllables();

document.getElementById("inputForm").addEventListener("submit", async (event) => {
    event.preventDefault()

    let wordList = await getWordList();

    if (wordList.length === 0) { return; }

    view.renderList(wordList);
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
    if (event.target.value) {
        view.enableSyllables();
    } else {
        view.disableSyllables();
    }
});
