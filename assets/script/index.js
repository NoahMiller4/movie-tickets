/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Object-oriented JavaScript
    Noah Miller

    Movie Theatre mock

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict';

import { select, print } from './utils.js';



const url = './assets/script/cities.json';
const url2 = './assets/script/movies.json';

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.toLowerCase();
}

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
    } catch(error) {

    }
}

async function getMovies() {
    try {
        const response = await fetch(url2, options);

        if (!response.ok) {
            throw new Error(`${response.statusText} (${response.status})`)
        }

    } catch(error) {
    }
}

function showMovies() {
    fetch(url2)
    .then(res => res.json())
    .then(data => handler(data))
        function handler(data) {
        data.forEach(arrayObject => {
            document.querySelector('section').innerHTML += `
            <div class='box'>
                 <img class="img" src=${arrayObject.image}>
                 <h3>${arrayObject.name}</h3>
             </div>`
        });
}
}


function cityName() {
fetch(url)
    .then(res => res.json())
    .then(data => handler(data))
        function handler(data) {
        const datalist = document.getElementById('cities');
        data.forEach(arrayObject => {
            const option = document.createElement('option');
            option.value = arrayObject.name;
            datalist.appendChild(option);
        });
}
}

function movieName() {
fetch(url2)
    .then(res => res.json())
    .then(data => handler(data))
        function handler(data) {
        const datalist = document.getElementById('movie');
        data.forEach(arrayObject => {
            const option = document.createElement('option');
            option.value = arrayObject.name;
            datalist.appendChild(option);
        });
}
}

showMovies();
cityName();
movieName();