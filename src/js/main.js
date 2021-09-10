'use strict'
//Variables

const input = document.querySelector('.js_input');
const buttonSearch = document.querySelector('.js_button');
const seriesList = document.querySelector('.js_list');

let series = [];

//Functions

function urlCreator() {
    const url = 'https://api.tvmaze.com/search/shows?q=' + input.value;
    return url;
};


function handleSearchSeries(event) {
    event.preventDefault();
    let url = urlCreator()
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            series = data;
            console.log(series);
        })

};
console.log(series)

function paintSeries() {
    let html = '';
    for (let show of series) {
        html += `<li class="list__elements js_elements">`;
        html += `<img class="list__elements--image js_image" src="${series.image.medium}" alt="Cartel de la serie"></img>`;
        html += `<p class="list__elements--series js_series">${data[i].slow}</p>`;
        html += `</li>`;
    }
    seriesList.innerHTML = html;
};

//Listeners

buttonSearch.addEventListener('click', handleSearchSeries);
