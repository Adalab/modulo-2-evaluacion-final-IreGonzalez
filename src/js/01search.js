
//FUNCTIONS

//Search

//Crea la url a través de la búsqueda de la usuaria
function urlCreator() {
    const url = `//api.tvmaze.com/search/shows?q=${input.value}`;
    return url;
};

//Pinta la lista de búsqueda
function paintSeries() {
    //Variable que contendrá el html añadido en la búsqueda realizada por la usuaria
    let html = '';
    //Variable que contendrá o no la clase específica de los objetos seleccionados como favoritos
    let favClass = '';
    //Reiniciamos el contenido para una nueva búsqueda
    seriesList.innerHTML = '';
    //Recorremos todo el array "series" y seleccionamos la información necesaria de cada objeto "search"
    for (const search of series) {
        //Creamos las constantes que añadirán los datos pertinentes el html introducido en cada búsqueda
        const id = search.show.id;
        const title = search.show.name;
        const image = search.show.image;
        const hour = search.show.schedule.time;
        //Añadir la clase a los elementos seleccionados como favoritos
        const insertFavClass = searchFavourites(search);
        if (insertFavClass) {
            favClass = '__clicked'
        }
        else {
            favClass = '';
        }
        //Añadimos el html necesario para pintar la lista de búsqueda
        html += `<li class="list__elements js_elements" id= "${id}">`;
        //Indicamos qué imagen utilizar en cada caso
        if (image === null) {
            const image = 'https://via.placeholder.com/210x295/ffffff/666666/text=TV'
            html += `<img class="list__elements--image${favClass}" src="${image}" alt="Cartel de la serie"></img>`;
        }
        else {
            html += `<img class="list__elements--image${favClass}" src="${image.original}" alt="Cartel de la serie"></img>`;
        }
        if (hour === '') {
            html += `<p class="list__elements--series${favClass} ">Sin emisión</p>`;
        }
        else {
            html += `<p class="list__elements--series${favClass} ">${hour}</p>`;
        }
        html += `<p class="list__elements--series${favClass} ">${title}</p>`;
        html += `</li>`;
    }
    //introducimos los datos de la constante html en el elemento correspondiente del html
    seriesList.innerHTML = html;
    listenerSelection();
};

function handleLog(ev) {
    ev.preventDefault();
    for (const serie of series) {
        console.log(serie.show.name);
    }

}

function handleSearchSeries(event) {
    //Evitamos que se recargue la página al activar el botón de búsqueda
    event.preventDefault();
    //Llamamos a la función que crea la URL
    let url = urlCreator();
    //Hacemos la petición a la API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            series = data;
            //Al hacer la petición se ejecuta la función que pinta la búsqueda realizada en pantalla
            paintSeries();
        })
};

