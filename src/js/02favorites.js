//Favorites
let favSelected = [];

function handleFavSelect(event) {
    //Escuchar dónde se hace click y añadirlo al contenedor de favoritos
    const userSelectedFavId = parseInt(event.currentTarget.id);
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
        paintFavList();
    };
    console.log(favourites);
    savedFavList();
}


function paintFavList() {
    const title = favSelected.show.name;
    const image = favSelected.show.image;
    htmlFav += `<li class="favourites__series js_favElements" >`
    htmlFav += `<div class="favourites__elements">`
    if (image === null) {
        const image = 'https://via.placeholder.com/210x295/ffffff/666666/text=TV'
        html += `<img class="favourites__elements--image js_favImage" src="" alt="Cartel de la serie"></img>`
    }
    else {
        htmlFav += `<img class="favourites__elements--image js_favImage" src="${image.original}" alt="Cartel de la serie"></img>`
    }
    htmlFav += `<p class="favourites__elements--series js_favSeries">${title}</p>`
    htmlFav += `</div>`
    htmlFav += `<i class ="favourites__button">X</i>`
    htmlFav += `</li>`;
    favouriteList.innerHTML = htmlFav;
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
