//Favourites

function handleFavSelect(event) {
    const userSelectedFavId = parseInt(event.currentTarget.id);

    const favouriteSelection = series.find(select => {
        return select.show.id === userSelectedFavId
    });

    const favouritesFound = favourites.findIndex(serieFav => {
        return serieFav.show.id === userSelectedFavId
    });

    favSelected = favouriteSelection;

    if (favouritesFound === -1) {

        const favouriteListCreator = favourites.push(favouriteSelection);

        paintFavList(favSelected);
        savedFavList();
    }
    else {
        favourites.splice(favouritesFound, 1);
        savedFavList();

        favouriteList.innerHTML = '';
        for (const favSelected of favourites) {
            paintFavList(favSelected)
        }
    }
    paintSeries();
    listenerRemove();
    addReset();
}


function paintFavList(favSelected) {
    let htmlFav = '';
    favouriteList.innerHTML = '';
    for (const favSelected of favourites) {
        const id = favSelected.show.id;
        const title = favSelected.show.name;
        const image = favSelected.show.image;
        htmlFav += `<li class="favourites__series " >`
        htmlFav += `<div class="favourites__elements">`
        if (image === null) {
            const image = 'https://via.placeholder.com/210x295/ffffff/666666/text=TV'
            htmlFav += `<img class="favourites__elements--image " src="${image}" alt="Cartel de la serie"></img>`
        }
        else {
            htmlFav += `<img class="favourites__elements--image " src="${image.original}" alt="Cartel de la serie"></img>`
        }
        htmlFav += `<p class="favourites__elements--series ">${title}</p>`
        htmlFav += `</div>`
        htmlFav += `<button name="${id}" class ="favourites__button js_removeButton"><i class="far fa-trash-alt"></i>
        </button>`
        htmlFav += `</li>`;
    }
    favouriteList.innerHTML = htmlFav;
    listenerRemove();
}


function searchFavourites(search) {

    const favouriteElement = favourites.find(serieFav => {
        return serieFav.show.id === search.show.id;
    })

    if (favouriteElement === undefined) {
        return false;
    }
    else {
        return true;
    }
}

function listenerSelection() {

    const listElements = document.querySelectorAll('.js_elements');
    for (const selected of listElements) {
        selected.addEventListener('click', handleFavSelect)
    }
}

function handleFavRemove(event) {
    if (favourites !== null) {

        const userWantRemove = parseInt(event.currentTarget.name)

        const favouritesFound = favourites.findIndex(serieFav => {
            return serieFav.show.id === userWantRemove
        });

        const favouriteListRemove = favourites.splice(favouritesFound, 1);
        paintFavList();
        paintSeries();
    }
}


function listenerRemove() {

    const buttonList = document.querySelectorAll('.js_removeButton');
    for (const removeButton of buttonList) {
        removeButton.addEventListener('click', handleFavRemove);
    }
    savedFavList();
}

function addReset() {
    if (favourites.length > 1) {
        reset.classList.remove('hidden');
    }
    else {
        reset.classList.add('hidden');
    }
}
addReset();

function handleResetFavList() {
    favourites = [];
    paintFavList(favSelected);
    savedFavList();
}