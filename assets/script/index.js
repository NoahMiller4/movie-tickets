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
            throw new Error(`${response.statusText} (${response.status})`)
        }

        const data = await response.json();
        print(data.name);
        // listCities(data.cities);
    } catch(error) {
        print(error.message)
    }
}


function showMovies() {
    fetch(url2)
        .then(response => response.json())
        .then(data => {
           document.querySelector('section').innerHTML += `
           <div class='box'>
                <img class="img" src=${data[0].image}>
                <h3>${data[0].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data[1].image}>
                <h3>${data[1].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data[2].image}>
                <h3>${data[2].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data[3].image}>
                <h3>${data[3].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data[4].image}>
                <h3>${data[4].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data[5].image}>
                <h3>${data[5].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data[6].image}>
                <h3>${data[6].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data[7].image}>
                <h3>${data[7].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data[8].image}>
                <h3>${data[8].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data[9].image}>
                <h3>${data[9].name}</h3>
            </div>
           `
        })
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
getCities();
getMovies();
cityName();
movieName();