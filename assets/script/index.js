/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Object-oriented JavaScript
    Noah Miller

    Movie Theatre mock

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict';

import { select, print } from './utils.js';



const url = './assets/script/cities.json';
const url2 = './assets/script/movies.json';
const list = select('section');

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
       document.querySelector('section').innerHTML += `
            <div>
                <img
                    class="poster" src="${data.movies[0].photo}"
                    alt="${(data.movies[0].name)}>
            </div>
        ` 
    }   catch(error) {
        print(error.message)
    }
}

function showMovies() {
    fetch(url2)
        .then(response => response.json())
        .then(data => {
           document.querySelector('section').innerHTML += `
           <div class='box'>
                <img class="img" src=${data.movies[0].image}>
                <h3>${data.movies[0].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data.movies[1].image}>
                <h3>${data.movies[1].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data.movies[2].image}>
                <h3>${data.movies[2].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data.movies[3].image}>
                <h3>${data.movies[3].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data.movies[4].image}>
                <h3>${data.movies[4].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data.movies[5].image}>
                <h3>${data.movies[5].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data.movies[6].image}>
                <h3>${data.movies[6].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data.movies[7].image}>
                <h3>${data.movies[7].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data.movies[8].image}>
                <h3>${data.movies[8].name}</h3>
            </div>
            <div class='box'>
                <img class="img" src=${data.movies[9].image}>
                <h3>${data.movies[9].name}</h3>
            </div>
           `
        })
}

showMovies();

/*fetch(url2)
    .then(function(response) {
        return response.json();
    })
    .then(function(movies){
        let placeholder =document.querySelector('section');
        let output = "";
        for(let data of movies){
            out +=
            `
                <div class="box">
                <img src=${data.image}>
                <h3>${data.name}</h3>
                </div>
            `
        }
        placeholder.innerHTML = out;
    })8?*/


getCities();
getMovies();