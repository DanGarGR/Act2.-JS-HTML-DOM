function imprimirDatos() {
    var nombre = document.getElementById('nombre').value;
    var puesto = document.getElementById('puesto').value;

    // Si se ingresan los datos, mostrar el contenido
    var seccionDatos = `
        <h3>Datos Personales</h3>
        <p>Nombre: ${nombre}</p>
        <p>Puesto: ${puesto}</p>
    `;

    // Colocar los datos dentro del div y ocultar el formulario
    document.getElementById('seccionDatos').innerHTML = seccionDatos;
}
