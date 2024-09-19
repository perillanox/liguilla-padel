window.onload = function () {
    // Datos de jugadores
    const players = [
        { name: 'Juan Pérez', rating: 85, birthdate: '1990-04-15', nationality: 'España', image: 'juan-perez.jpg' },
        { name: 'María López', rating: 90, birthdate: '1988-08-23', nationality: 'España', image: 'maria-lopez.jpg' },
    ];

    const teams = [
        { name: 'Team 1', players: ['Juan Pérez', 'María López'], images: ['juan-perez.jpg', 'maria-lopez.jpg'] },
    ];

    cargarJugadores(players);
    cargarEquipos(teams);
}

function cargarJugadores(players) {
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = ''; // Limpiar cualquier contenido previo

    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.innerHTML = `
            <img src="static/${player.image}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>Rating: ${player.rating}</p>
            <p>Nacimiento: ${player.birthdate}</p>
            <p>Nacionalidad: ${player.nationality}</p>
        `;
        playersList.appendChild(playerCard);
    });
}

function cargarEquipos(teams) {
    const teamsList = document.getElementById('teams-list');
    teamsList.innerHTML = ''; // Limpiar cualquier contenido previo

    teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('team-card');
        teamCard.innerHTML = `
            <h3>${team.name}</h3>
            ${team.players.map((player, index) => `<img src="static/${team.images[index]}" alt="${player}">`).join('')}
        `;
        teamsList.appendChild(teamCard);
    });
}

// Función para mostrar la sección seleccionada
function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.classList.remove('visible'));
    document.getElementById(seccionId).classList.add('visible');
}
