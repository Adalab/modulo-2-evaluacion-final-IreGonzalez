
//FUNCTIONS

//Search
savedFavList()

function urlCreator() {
    const url = `//api.tvmaze.com/search/shows?q=${input.value}`;
    return url;
};

function paintSeries() {

    for (const search of series) {
        const id = search.show.id;
        const title = search.show.name;
        const image = search.show.image;
        //Añadir la clase correspondiente si está en la lista favourites
        const insertFavClass = searchFavourites(search);
        if (insertFavClass) {
            favClass = '__clicked'
        }
        else {
            favClass = '';
        }

        //Pintar Series en el cuerpo principal de la página
        html += `<li class="list__elements js_elements" id= "${id}">`;
        if (image === null) {
            const image = 'https://via.placeholder.com/210x295/ffffff/666666/text=TV'
            html += `<img class="list__elements--image${favClass} js_image" src="${image}" alt="Cartel de la serie"></img>`;
        }
        else {
            html += `<img class="list__elements--image${favClass} js_image" src="${image.original}" alt="Cartel de la serie"></img>`;
        }
        html += `<p class="list__elements--series${favClass} js_series">${title}</p>`;
        html += `</li>`;
    }
    seriesList.innerHTML = html;
    //solo puede ser ejecutada si se ha pintado previamente el html
    listenerSelection()
};

function handleSearchSeries(event) {
    event.preventDefault();
    let url = urlCreator()
    fetch(url)
        .then(response => response.json())
        .then(data => {
            series = data;
            console.log(series);
            paintSeries();
        })

};

