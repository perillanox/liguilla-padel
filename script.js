// Datos de ejemplo
const jugadores = [
    { nombre: "Xoán Menor", puntos: 4 },
    { nombre: "Roberto Lamas", puntos: 2 },
    { nombre: "Artai Losada", puntos: 0 },
    { nombre: "Eric Fernández", puntos: 1 }
];

// Función para generar el rating de jugadores
function generarRating() {
    const ratingTable = document.getElementById('ratingTable');
    jugadores.sort((a, b) => b.puntos - a.puntos);  // Ordenar por puntos

    jugadores.forEach((jugador, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${jugador.nombre}</td>
            <td>${jugador.puntos}</td>
        `;
        ratingTable.appendChild(row);
    });
}

// Función para generar la clasificación general
function generarClasificacion() {
    const classificationList = document.getElementById('classificationList');

    jugadores.forEach((jugador, index) => {
        const li = document.createElement('li');
        li.innerText = `${index + 1}. ${jugador.nombre} - ${jugador.puntos} puntos`;
        classificationList.appendChild(li);
    });
}

// Inicializar las tablas y listas cuando cargue la página
window.onload = () => {
    generarRating();
    generarClasificacion();
};
