'use strict'
//Variables

const input = document.querySelector('.js_input');
const buttonSearch = document.querySelector('.js_button');
let series = [];
let html = '';

//Functions

function urlCreator(input) {
    const url = `https://api.tvmaze.com/search/shows?q=${input}`;
    return url;
};

function handleSearchSeries(event) {
    let url = urlCreator(input.value);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            series = data.series;
        })
};


function paintSeries() {


};




//Listeners

buttonSearch.addEventListener('click', handleSearchSeries);