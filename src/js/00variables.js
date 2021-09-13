'use strict'

//VARIABLES

//Search

//Recoger el valor introducido por la usuaria
const input = document.querySelector('.js_input');
//Activar la búsqueda realizada
const buttonSearch = document.querySelector('.js_button');
//Lugar donde pintar la lista creada por los elementos de la búsqueda
const seriesList = document.querySelector('.js_list')
//Lista a rellenar con los datos de la búsqueda
let series = [];


//Favourites

//Lugar donde pintar la lista de Favoritos seleccionados por la usuaria
let favouriteList = document.querySelector('.js_favourites');
//Botón de reset
const reset = document.querySelector('.js_reset');
//Lista a rellenar con los datos seleccionados como favoritos por la usuaria
let favourites = [];
//Extraer el objeto seleccionado por la usuaria y utilizarlo
let favSelected = [];
