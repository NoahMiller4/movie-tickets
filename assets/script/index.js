/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Object-oriented JavaScript
    Noah Miller

    Retrieving remote data with fetch()

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict';

import { select, print } from './utils.js';

// Don't use this in your assignment, must fetch
import info from './cities.js';
print(info.cities);

const url = './assets/script/cities.json';
const list = select('section');

function listCities(array) {
    list.innerHTML = '';
    let cities = '';

    if (array.length > 0) {
        array.forEach(city => {
            cities += `<li>${city.name}</li>`;
        });
    }   else {
        cities = `<li>Cities not found</li>`;
    }

    list.innerHTML = `<ul>${cities}</ul>`;
}



// fetch function
const options =  {
    method: 'GET',
    headers: { 'Content-Type': 'application/json; charset =UTF-8'},
    mode: 'cors'
}

async function getCities() {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`${response.statusText} (${response.status})`)
        }

        const data = await response.json();
        print(data.cities);
        listCities(data.cities);
    } catch(error) {
        print(error.message)
    }
}

getCities();