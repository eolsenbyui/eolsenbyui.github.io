'use strict';

const textURL = 'https://www.boredapi.com/api/activity';

const textButton = document.getElementById('bored');
const outputDiv = document.getElementById('output');


textButton.addEventListener('click', async () => {
    outputDiv.style.marginTop = '2em';
    outputDiv.style.fontSize = '1em';
    outputDiv.innerHTML = 'Waiting for response.  The API is slow so please be patient...';
    try {
        let response = await fetch(textURL);

        if (!response.ok) {
            throw new Error(`HTTP error: status = ${response.status}`);
        }

        let json = await response.json();

        outputDiv.style.fontSize = '2em';
        outputDiv.innerText = json.activity;
    } catch (error) {
        outputDiv.innerText = 'There was a problem with the fetch() operation: ' + error.message;
    }
}, false);

