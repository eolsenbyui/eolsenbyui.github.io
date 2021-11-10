'use strict';

const validKeys = [];

window.addEventListener("load", (event) => {
    let divs = document.querySelectorAll("body > div > div[data-key]");
    // body > div > div:nth-child(1)

    divs.forEach(div => validKeys.push(div.dataset.key));
});


document.addEventListener("keydown", (event) => {

    let code = event.key.charCodeAt();
    if (code > 90) {
        code -= 32;     // Force to capital letter code.
    }

    let textKey = code.toString();

    if (!validKeys.includes(textKey)) { return; }

    let audio = document.querySelector(`body > audio[data-key="${textKey}"]`);

    let key = document.querySelector(`body > div > div[data-key="${textKey}"]`);
    //console.dir(key);
    key.classList.add("playing");


    // I think the following is too slow.  I prefer the keyup event.
    audio.addEventListener("ended", (event) => {
        key.classList.remove("playing");
    });

    audio.currentTime = 0;
    audio.play();
    //console.dir(audio);
});


//  I much prefer the keyup event for changing the style
document.addEventListener("keyup", (event) => {
    return;

    let code = event.key.charCodeAt();
    if (code > 90) {
        code -= 32;     // Force to capital letter code.
    }

    let textKey = code.toString();

    if (!validKeys.includes(textKey)) { return; }

    let key = document.querySelector(`body > div > div[data-key="${textKey}"]`);
    key.classList.remove("playing");
});
