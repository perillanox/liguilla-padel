/* Estilos generales */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

h1, h2 {
    color: #333;
}

p {
    font-size: 1.2em;
    color: #555;
}

/* Barra de navegación */
header {
    background-color: #333;
    padding: 1em 0;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

nav ul li {
    margin: 0 1em;
}

nav ul li a {
    color: #ff9800;  /* Color naranja */
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
}

nav ul li a:hover {
    color: #ffffff;  /* Color blanco al pasar el ratón */
}

/* Secciones */
section {
    padding: 2em;
    text-align: center;
    display: none;  /* Oculto por defecto */
}

section.visible {
    display: block;  /* Visible cuando se selecciona */
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1em;
}

table, th, td {
    border: 1px solid #ddd;
}

th, td {
    padding: 8px;
    text-align: center;
}

th {
    background-color: #333;
    color: white;
}

td {
    background-color: #f9f9f9;
}
