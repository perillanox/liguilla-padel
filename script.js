// Datos de los jugadores
const jugadores = [
    { nombre: "Juan Pérez", partidos_ganados: 5, rating: 85 },
    { nombre: "Carlos Ruiz", partidos_ganados: 4, rating: 78 },
    { nombre: "Ana Gómez", partidos_ganados: 6, rating: 92 },
    { nombre: "Luis Martínez", partidos_ganados: 3, rating: 70 }
];

// Función para mostrar una sección específica
function mostrarSeccion(seccion) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => {
        if (sec.id === seccion) {
            sec.classList.add('visible');
        } else {
            sec.classList.remove('visible');
        }
    });

    // Llenar dinámicamente las tablas cuando se muestran
    if (seccion === 'rating') {
        mostrarRating();
    } else if (seccion === 'classification') {
        mostrarClasificacion();
    }
}

// Función para mostrar la tabla de rating
function mostrarRating() {
    const tablaRating = document.getElementById('tabla-rating');
    tablaRating.innerHTML = '';  // Limpiar la tabla antes de llenarla

    // Ordenar jugadores por rating de mayor a menor
    const jugadoresOrdenados = [...jugadores].sort((a, b) => b.rating - a.rating);

    // Llenar la tabla con los datos de los jugadores
    jugadoresOrdenados.forEach((jugador, index) => {
        const fila = `
            <tr>
                <td>${index + 1}</td>
                <td>${jugador.nombre}</td>
                <td>${jugador.rating}</td>
            </tr>
        `;
        tablaRating.innerHTML += fila;
    });
}

// Función para mostrar la tabla de clasificación
function mostrarClasificacion() {
    const tablaClasificacion = document.getElementById('tabla-clasificacion');
    tablaClasificacion.innerHTML = '';  // Limpiar la tabla antes de llenarla

    // Calcular puntos de clasificación (3 puntos por partido ganado)
    jugadores.forEach(jugador => {
        jugador.puntos = jugador.partidos_ganados * 3;
    });

    // Ordenar jugadores por puntos de mayor a menor
    const jugadoresOrdenados = [...jugadores].sort((a, b) => b.puntos - a.puntos);

    // Llenar la tabla con los datos de los jugadores
    jugadoresOrdenados.forEach((jugador, index) => {
        const fila = `
            <tr>
                <td>${index + 1}</td>
                <td>${jugador.nombre}</td>
                <td>${jugador.puntos}</td>
                <td>${jugador.partidos_ganados}</td>
            </tr>
        `;
        tablaClasificacion.innerHTML += fila;
    });
}

// Mostrar la sección Home por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('home');
});
