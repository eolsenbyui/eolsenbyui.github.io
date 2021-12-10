'use strict';

const URL = "https://api.datamuse.com/words?";

export function buildQuery() {
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

    if (query.length > 0) {
        return query.join('&') + "&max=50";     // limit to 50 results
    } else {
        return "";
    }
}


export async function getWordList() {
    let query = buildQuery()

    if (query) {
        let url = URL + query;

        let response = await fetch(url);

        if (response.ok) {
            let wordList = await response.json();
            return wordList;
        } else {
            throw new Error(`${response.status}: ${response.statusText}`);
        }
    } else {
        return [];
    }
}