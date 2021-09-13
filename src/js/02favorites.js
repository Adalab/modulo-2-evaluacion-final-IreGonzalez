//Favorites

function handleFavSelect(event) {
    //Escuchar dónde se hace click y añadirlo al contenedor de favoritos
    const userSelectedFavId = parseInt(event.currentTarget.id);
    console.log(userSelectedFavId);
    //Que el currentTarget del ob.clikado debe ser igual al encontrado en la lista series
    const favouriteSelection = series.find(select => {
        return select.show.id === userSelectedFavId
    });
    //Compruebo si ya está en la lista
    const favouritesFound = favourites.findIndex(serieFav => {
        return serieFav.show.id === userSelectedFavId
    });
    //añadir el objeto seleccionado a una constante para poder ser usado
    favSelected = favouriteSelection;
    //Agregar a la lista de favoritos
    if (favouritesFound === -1) {
        //crear una lista nueva con ellas
        const favouriteListCreator = favourites.push(favouriteSelection);
        //Cambiar color de la serie favorita en lista principal
        //mostrar los datos de esa lista pintando html
        paintFavList(favSelected);
        savedFavList();
    }
    else {
        favourites.splice(favouritesFound, 1);
        savedFavList();
        //vaciar la lista de favoritos para volver a pintarla
        favouriteList.innerHTML = '';
        for (const favSelected of favourites) {
            paintFavList(favSelected)
        }
    }
    paintSeries();
    listenerRemove();
    addReset();
    console.log(favourites);
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

//Consultar si está o no en la lista de favoritos
function searchFavourites(search) {
    //comprobamos que el id del elemento seleccionado coincide con el id de un elemento "pintado" con la función paintSeries
    const favouriteElement = favourites.find(serieFav => {
        return serieFav.show.id === search.show.id;
    })
    // comparamos el resultado anterior para poder utilizarlo dentro del for de paintSeries y así añadir la clase que modifique el color de forma permanente siempre que esté seleccionada como favorita
    if (favouriteElement === undefined) {
        return false;
    }
    else {
        return true;
    }
}

function listenerSelection() {
    //esta clase solo existe al pintarse el html, por eso solo se puede ejecutar al final de ser pintada, para asegurarnos que exista
    const listElements = document.querySelectorAll('.js_elements');
    for (const selected of listElements) {
        selected.addEventListener('click', handleFavSelect)
    }
}

function handleFavRemove(event) {
    if (favourites !== null) {
        //Identifico cuál es la que desean eliminar
        const userWantRemove = parseInt(event.currentTarget.name)
        console.log(event.currentTarget);
        //Busco en la lista de Favoritos cuál es su posición
        const favouritesFound = favourites.findIndex(serieFav => {
            return serieFav.show.id === userWantRemove
        });
        console.log(favouritesFound);
        // //Elimino de la lista
        // const toRemove = parseInt(favouritesFound);
        const favouriteListRemove = favourites.splice(favouritesFound, 1);
        paintFavList();
        paintSeries();
    }
}


function listenerRemove() {
    //solo existe al generarse favourites, por eso solo se puede ejecutar al final de generarse
    const buttonList = document.querySelectorAll('.js_removeButton');
    for (const removeButton of buttonList) {
        removeButton.addEventListener('click', handleFavRemove);
    }
    //Actualizamos los datos de la lista guardada en localStorage
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
    //Repintamos la lista de favoritos, ahora vacía
    paintFavList(favSelected);
    //Actualizamos la lista de localStorage
    savedFavList();
}