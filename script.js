// Función para mostrar secciones dinámicamente
function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.classList.remove('visible'));
    document.getElementById(seccionId).classList.add('visible');
}

// Datos de ejemplo para jugadores y MVPs
const jugadores = [    { nombre: 'Carlos López', rating: 85, puntos: 30, ganados: 10 },    { nombre: 'Laura Martínez', rating: 92, puntos: 28, ganados: 9 },    { nombre: 'José Fernández', rating: 78, puntos: 26, ganados: 8 }];

const mvps = [    { nombre: 'Carlos López', img: 'static/mvp-actual.jpg' },    { nombre: 'Laura Martínez', img: 'static/mvp-anterior1.jpg' },    { nombre: 'José Fernández', img: 'static/mvp-anterior2.jpg' }];

// Función para cargar el rating de los jugadores
function cargarRating() {
    const tablaRating = document.getElementById('tabla-rating');
    jugadores.forEach((jugador, index) => {
        const fila = `<tr>
            <td>${index + 1}</td>
            <td>${jugador.nombre}</td>
            <td>${jugador.rating}</td>
        </tr>`;
        tablaRating.innerHTML += fila;
    });
}

// Función para cargar la clasificación de los jugadores
function cargarClasificacion() {
    const tablaClasificacion = document.getElementById('tabla-clasificacion');
    jugadores.forEach((jugador, index) => {
        const fila = `<tr>
            <td>${index + 1}</td>
            <td>${jugador.nombre}</td>
            <td>${jugador.puntos}</td>
            <td>${jugador.ganados}</td>
        </tr>`;
        tablaClasificacion.innerHTML += fila;
    });
}

// Función para cargar el MVP actual y anteriores
function cargarMVPs() {
    document.getElementById('mvp-actual-nombre').textContent = mvps[0].nombre;
    const mvpAnterioresContainer = document.getElementById('mvp-anteriores-container');
    mvps.slice(1).forEach(mvp => {
        const mvpHTML = `<div>
            <img src="${mvp.img}" alt="MVP ${mvp.nombre}">
            <p>${mvp.nombre}</p>
        </div>`;
        mvpAnterioresContainer.innerHTML += mvpHTML;
    });
}

// Cargar los datos al iniciar la página
window.onload = function() {
    cargarRating();
    cargarClasificacion();
    cargarMVPs();
};
