'use strict';

const validKeys = [];

window.addEventListener("load", (event) => {
    let divs = document.querySelectorAll(".key[data-key]");

    divs.forEach(div => validKeys.push(div.dataset.key));
});


document.addEventListener("keydown", (event) => {

    let code = event.key.charCodeAt();
    if (code > 90) {
        code -= 32;     // Force to capital letter code.
    }

    let textKey = code.toString();

    if (!validKeys.includes(textKey)) { return; }

    let audio = document.querySelector(`audio[data-key="${textKey}"]`);

    let key = document.querySelector(`.key[data-key="${textKey}"]`);

    key.classList.add("playing");   // Highlight the key while its sound plays

    // Move the key vertically when pressed, up to 10 times, then reset.
    let top = parseInt(key.style.marginTop, 10) || 0;
    if (top >= 100) {    // Reset position
        top = 0; 
        key.style.marginTop = top + 'px';
    } else {
        key.style.marginTop = top + 10 + 'px';
    }


    // I think the following is too slow.  I prefer the keyup event.
    audio.addEventListener("ended", (event) => {
        key.classList.remove("playing");
    });

    audio.currentTime = 0;
    audio.play();
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
