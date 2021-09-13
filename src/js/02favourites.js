//Favourites

//
function handleFavSelect(event) {
    const userSelectedFavId = parseInt(event.currentTarget.id);
    //Que el currentTarget del ob.clikado debe ser igual al encontrado en la lista series
    const favouriteSelection = series.find(select => {
        return select.show.id === userSelectedFavId
    });

    const favouritesFound = favourites.findIndex(serieFav => {
        return serieFav.show.id === userSelectedFavId
    });

    favSelected = favouriteSelection;
    //Agregar o eliminar de la lista de favoritos
    if (favouritesFound === -1) {
        //Añadimos al array "favourites" el elemento seleccionado
        const favouriteListCreator = favourites.push(favouriteSelection);
        //Pintamos la lista de favoritos
        paintFavList(favSelected);
        //Actualizamos el localStorage
        savedFavList();
    }
    else {
        //Eliminamos del Array el elemento seleccionado
        favourites.splice(favouritesFound, 1);
        //Actualizamos el localStorage
        savedFavList();

        favouriteList.innerHTML = '';
        //Recorremos todo el array para poder volver a pintarlo actualizado
        for (const favSelected of favourites) {
            paintFavList(favSelected)
        }
    }
    //Actualizamos la lista principal de "series" para añadir la clase de resalte
    paintSeries();
    //Escuchamos los elementos que pueden ser seleccionados para eliminar de la lista
    listenerRemove();
    //Según los datos que contenga la lista se activará el botón de reset
    addReset();
}


function paintFavList(favSelected) {
    //Variable en la que se almacenarán los datos html de "favourites"
    let htmlFav = '';
    //Reseteamos la lista cada vez que se produzca una modificación
    favouriteList.innerHTML = '';
    //Recorremos todo el array "favourites" para extraer la info de cada "favSelected"
    for (const favSelected of favourites) {
        //Creamos las constantes necesarias para extraer los datos que nos interesan de cada serie
        const id = favSelected.show.id;
        const title = favSelected.show.name;
        const image = favSelected.show.image;
        //Añadimos el html a la constante declarada
        htmlFav += `<li class="favourites__series " >`
        htmlFav += `<div class="favourites__elements">`
        //Asignamos las alternativas de imagen
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
    //Añadimos los datos recogidos por la constante en el lugar correspondiente del html
    favouriteList.innerHTML = htmlFav;
    //Escuchamos los objetos seleccionados para ser eliminados 
    listenerRemove();
    addReset();
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
        //Busco en la lista de Favoritos cuál es su posición
        const favouritesFound = favourites.findIndex(serieFav => {
            return serieFav.show.id === userWantRemove
        });
        // //Elimino de la lista
        // const toRemove = parseInt(favouritesFound);
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

//Añadimos el botón de reset
function addReset() {
    //Si la lista de favoritos es mayor que 1
    if (favourites.length > 1) {
        reset.classList.remove('hidden');
    }
    else {
        reset.classList.add('hidden');
    }
}
//la función se ejecutará automáticamente cuando la condición se cumpla
addReset();

function handleResetFavList() {
    //Vaciamos la lista de favoritos al ser activado el botón de reset
    favourites = [];
    paintFavList(favSelected);
    savedFavList();
}