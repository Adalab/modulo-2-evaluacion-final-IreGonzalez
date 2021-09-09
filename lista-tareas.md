[X] ESTRUCTURA BÁSICA
[] RECORDATORIOS ESENCIALES
    [] Quitar los console.log()
    [] Hacer COMMITS cada poco tiempo
    [] Trabajar en testing y mergear SOLO cuando funcione algo
    [] Funciones ARROW llamadas handle...
    [] Mejorar el README
    []Añadir que se active la búsqueda con INTRO
[] BÚSQUEDA
    [] Hacer la petición al servidor - FETCH
        [] Crear un listado que esté disponible para utilizarlo en caso de ser necesario
        [] Recoger únicamente la información que necesitamos
            ...show.name.image(medium/original)
    [] Búsqueda de serie
        [] Recoger el texto introducido por la usuaria -Input
        [] Enviar la petición de la usuaria a la lista creada
        [] Recoger la información seleccionada
        [] Pintar los datos en el lugar correspondiente
            [] Crear el html necesario a través de js
            [] Si poseen imagen propia, expraerla y pintarla
            [] Si no poseen imagen establecer una imagen por defecto
[] FAVORITOS
    [] Seleccionar serie
        [] Escuchar el evento click
        [] Debe realizar dos tareas
            [] Añadir serie a la lista favoritos
                [] Comprobar si está o no en esa lista
                [] Si no está, pintarla
            [] Cambiar fondo en lista principal si está en favoritos
                [] Añadir una clase que modifique el fondo al hacer click sobre ella
[] ALMACENAMIENTO LOCAL
    [] Almacenar los datos de la lista de favoritos en la caché => localStorage.setItem (,)
    [] Al arrancar la página de nuevo, solicitar los datos => localStorage.getItem()
[] BONUS: BORRAR FAVORITOS
    [] Escuchar el evento click en el botón-Aspa
    [] Eliminar de la lista de favoritos (no solo la info, tb del html)
    [] Cuando haya más de 1 elemento en la lista, que aparezca un botón de eliminar todos
[] BONUS: AFINAR LA MAQUETACIÓN
    [] Completar el grid que ordena las películas
    [] Editar la lista de favoritos
    [] Dar estilos a los botones
    [] Buscar iconos para los notones de eliminar


