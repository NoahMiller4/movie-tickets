/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Object-oriented JavaScript
    Noah Miller

    Movie Theatre mock

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict';

import { select, print } from './utils.js';

const url = './assets/script/cities.json';
const url2 = './assets/script/movies.json';
const list = select('.one');
const section = select('.two');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.toLowerCase();
}

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
        // listCities(data.cities);
    } catch(error) {
        print(error.message)
    }
}

async function getMovies() {
    try {
        const response = await fetch(url2, options);

        if (!response.ok) {
            throw new Error (`${response.statusText} (${response.status})`)
        }

        const data = await response.json();
        print(data.movies);
    }   catch(error) {
        print(error.message)
    }
}

getCities();
getMovies();