function savedFavList() {
    localStorage.setItem('favourites', JSON.stringify(favourites));
}

function getLocalStorage() {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites'))

    if (savedFavourites === null) {
        favourites = [];
    }
    else {
        favourites = savedFavourites;
    }
    for (const favSelected of favourites) {
        paintFavList(favSelected)
        addReset()
    }
}

getLocalStorage()
console.log(favourites);