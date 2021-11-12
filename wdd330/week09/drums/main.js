'use strict';


window.addEventListener("load", (event) => {
    let keys = Array.from(document.querySelectorAll(".key"));

    keys.forEach(key => key.addEventListener("transitionend", onTransitionEnd));
});


function onTransitionEnd(event) {
    // Many transitions, including transitionend events, occur on different properties.
    // The property we're interested in is "transform", which is the last property to finish the transition.
    if (event.propertyName !== "transform") { return; }

    event.target.classList.remove("playing");   // Remove highlighting of key after transition-duration
}


document.addEventListener("keydown", (event) => {
    let code = event.key.charCodeAt();
    if (code > 90) {
        code -= 32;     // Force to uppercase letter code.
    }

    let textKey = code.toString();

    let audio = document.querySelector(`audio[data-key="${textKey}"]`);
    if (!audio) { return; }

    let key = document.querySelector(`.key[data-key="${textKey}"]`);

    key.classList.add("playing");   // Highlight the key for transition-duration of key class

    // Move the key vertically when pressed, up to 10 times, then reset.
    let top = parseInt(key.style.marginTop, 10) || 0;
    if (top >= 90) {    
        key.style.marginTop = '0';  // Reset position
    } else {
        key.style.marginTop = top + 10 + 'px';
    }

    audio.currentTime = 0;
    audio.play();
});
