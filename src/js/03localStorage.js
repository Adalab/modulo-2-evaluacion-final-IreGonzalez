function savedFavList() {
    //guarda en la caché las datos elegidos
    localStorage.setItem('favourites', JSON.stringify(favourites));
}

//Extraemos de la caché los datos recorriendo la lista de la Api y extrayendo los necesarios para nuestra web
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