'use strict';


export async function getJson(url) {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let json = await response.json();
            return json;
        } else {
            throw Error(response.statusText);
        }
    } catch (error) {
        console.error(error);
    }
}


export function getLocation(options) {
    return new Promise( (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}