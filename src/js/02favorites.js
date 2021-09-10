//Favorites

function handleFavSelect(event) {
    //Escuchar dónde se hace click y añadirlo al contenedor de favoritos
    const selectedFav = parseInt(event.currentTarget.id);
    console.log(selectedFav);
    //Que el currentTarget del ob.clikado debe ser igual al encontrado en la lista series
    console.log(series);
    const favouriteSelect = series.find(select => {
        return select.show.id === selectedFav
    });
    console.log(favouriteSelect);
    //crear una lista nueva con ellas
    //mostrar los datos de esa lista pintando html
}

function listenerSelection() {
    //esta clase solo existe al pintarse el html, por eso solo se puede ejecutar al final de ser pintada, para asegurarnos que exista
    const listElements = document.querySelectorAll('.js_elements');
    for (const selected of listElements) {
        selected.addEventListener('click', handleFavSelect)
    }
}
