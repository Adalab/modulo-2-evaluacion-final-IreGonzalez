//localStorage

//Guardamos la lista de "favourites" en la caché
function savedFavList() {
    localStorage.setItem('favourites', JSON.stringify(favourites));
}

//Recuperamos los datos guardados en la caché
function getLocalStorage() {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites'))
    //Si la lista guardada de favoritos es nul es que está vacía
    if (savedFavourites === null) {
        favourites = [];
    }
    //Se añaden los datos obtenidos de la caché a la lista favourites
    else {
        favourites = savedFavourites;
    }
    //Recorremos el array completo
    for (const favSelected of favourites) {
        //Pintamos en pantalla con los datos obtenidos de array
        paintFavList(favSelected)
        //En caso de ser necesario se añadirá el botón de reset
        addReset()
    }
}

getLocalStorage()