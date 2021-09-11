//Favorites

function handleFavSelect(event) {
    //Escuchar dónde se hace click y añadirlo al contenedor de favoritos
    const userSelectedFavId = parseInt(event.currentTarget.id);
    console.log(userSelectedFavId);
    //Que el currentTarget del ob.clikado debe ser igual al encontrado en la lista series
    const favouriteSelection = series.find(select => {
        return select.show.id === userSelectedFavId
    });
    console.log(favouriteSelection);

    //Compruebo si ya está en la lista
    const favouritesFound = favourites.findIndex(serieFav => {
        return serieFav.show.id === userSelectedFavId
        console.log(serieFav.id);
    });

    console.log(favouritesFound);
    //Agregar a la lista de favoritos
    if (favouritesFound === -1) {
        //crear una lista nueva con ellas
        const favouriteListCreator = favourites.push(favouriteSelection);
        console.log(favourites);
    }
    else {

    }

    //mostrar los datos de esa lista pintando html

    //Cambiar color de la serie favorita en lista principal
    changeColor()
}

function changeColor(event) {
    const image = document.querySelector('.js_image');
    image.classList.toggle('clicked');
}

function listenerSelection() {
    //esta clase solo existe al pintarse el html, por eso solo se puede ejecutar al final de ser pintada, para asegurarnos que exista
    const listElements = document.querySelectorAll('.js_elements');
    for (const selected of listElements) {
        selected.addEventListener('click', handleFavSelect)
    }
}
