import { makeRequest } from './helpers.js';
import Auth from './auth.js'



document.getElementById("login").addEventListener("submit", (event) => {
    event.preventDefault();

    let auth = new Auth();

    auth.login(onLoginSuccess);
});


async function onLoginSuccess(token) {
    let data = await makeRequest('posts', 'GET', null, token=token);
    document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}