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
    
    // Recorrer todas las secciones y mostrar solo la seleccionada
    secciones.forEach(sec => {
        if (sec.id === seccion) {
            sec.classList.add('visible');
        } else {
            sec.classList.remove('visible');
        }
    });

    // Llamamos a la función correspondiente dependiendo de la sección
    if (seccion === 'rating') {
        mostrarRating(); // Llenar la tabla de rating
    } else if (seccion === 'classification') {
        mostrarClasificacion(); // Llenar la tabla de clasificación
    }
}

// Función para mostrar la tabla de rating
function mostrarRating() {
    const tablaRating = document.getElementById('tabla-rating');
    
    // Verificar que el elemento de la tabla de rating existe
    if (!tablaRating) {
        console.error("No se encontró la tabla de rating en el DOM");
        return;
    }

    // Limpiar la tabla antes de llenarla
    tablaRating.innerHTML = '';  

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
    
    // Verificar que el elemento de la tabla de clasificación existe
    if (!tablaClasificacion) {
        console.error("No se encontró la tabla de clasificación en el DOM");
        return;
    }

    // Limpiar la tabla antes de llenarla
    tablaClasificacion.innerHTML = '';  

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
