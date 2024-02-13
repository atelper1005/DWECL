// Función para realizar la petición AJAX al servidor
function enviarPeticionAJAX() {
    
    fetch('/pagAjax')
        .then(response => response.json())
        .then(obj => {
            // Mostrar la respuesta en el contenedor
            document.getElementById('respuesta').innerHTML = `<p>Hola ${obj.nombre} ${obj.apellido}</p>`;
        })
        .catch(error => console.error('Error al procesar la petición:', error));
}

// Asignar evento al botón para enviar la petición AJAX al hacer clic
window.onload = function() {
    document.getElementById('btnEnviar').addEventListener('click', enviarPeticionAJAX);
}