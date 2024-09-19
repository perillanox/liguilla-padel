window.onload = function () {
    // Datos de jugadores
    const players = [
        { name: 'Juan Pérez', rating: 85, birthdate: '1990-04-15', nationality: 'España' },
        { name: 'María López', rating: 90, birthdate: '1988-08-23', nationality: 'España' },
    ];

    const teams = [
        { name: 'Team 1', players: ['Juan Pérez', 'María López'], images: ['static/juan.png', 'static/maria.png'] },
    ];

    cargarJugadores(players);
    cargarEquipos(teams);
}

function cargarJugadores(players) {
    const playersList = document.getElementById('players-list');
    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card');
        playerCard.innerHTML = `
            <img src="static/${player.name.toLowerCase().replace(' ', '-')}.jpg" alt="${player.name}">
            <h3>${player.name}</h3>
            <p>Rating: ${player.rating}</p>
        `;
        playersList.appendChild(playerCard);
    });
}

function cargarEquipos(teams) {
    const teamsList = document.getElementById('teams-list');
    teams.forEach(team => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('team-card');
        teamCard.innerHTML = `
            <h3>${team.name}</h3>
            ${team.players.map((player, index) => `<img src="${team.images[index]}" alt="${player}">`).join('')}
        `;
        teamsList.appendChild(teamCard);
    });
}

// Muestra la sección seleccionada y oculta las demás
function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => seccion.classList.remove('visible'));
    document.getElementById(seccionId).classList.add('visible');
}
