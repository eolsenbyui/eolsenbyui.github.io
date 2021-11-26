'use strict';

export default class View {

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
}