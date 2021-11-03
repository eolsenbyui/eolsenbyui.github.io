'use strict';

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');


textButton.addEventListener('click', async () => {
    outputDiv.innerHTML = 'Waiting for response...';
    try {
        let response = await fetch(textURL);

        if (!response.ok) {
            throw new Error(`HTTP error: status = ${response.status}`);
        }

        outputDiv.innerText = await response.text();
    } catch (error) {
        outputDiv.innerText = 'There was a problem with the fetch() operation: ' + error.message;
    }
}, false);


apiButton.addEventListener('click', () => {
    outputDiv.innerText = "Not safe for BYU-Idaho or work.";
    /*
    fetch(apiURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => outputDiv.innerText = data.value )
    .catch( error => console.log('There was an error:', error))
    */
},false);
