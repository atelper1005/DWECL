document.addEventListener("DOMContentLoaded", () => {
    let nombreInput = document.getElementById("nombreInput");
    let apellidosInput = document.getElementById("apellidosInput");
    let enviarBtn = document.getElementById("enviarBtn");
    let bodyTabla = document.getElementById("bodyTabla");

    let obtenerDocumentos = async () => {
        let response = await fetch("/showPersonas");
        let documentos = await response.json();
        actualizarTabla(documentos);
    };

    // enviarDocumento obtiene los datos introducidos (que se encuentran en addDatos) y luego
    // los envía al método actualizarTabla para mostrarlos.
    let enviarDocumento = async () => {
        let nombre = nombreInput.value;
        let apellidos = apellidosInput.value;
        if (nombre && apellidos) {
            try {
                await fetch("/addDatos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ nombre, apellidos }),
                });
                nombreInput.value = "";
                apellidosInput.value = "";
                obtenerDocumentos();
            } catch (error) {
                console.error("Error al enviar documento:", error);
            }
        } else {
            alert("Por favor, complete ambos campos.");
        }
    };

    // Obtiene los datos de la base de datos junto con los nuevos datos introducidos por los input de
    // nombre y apellido, luego recorre todos los datos y los muestra en la tabla uno a uno.
    let actualizarTabla = (documentos) => {
        bodyTabla.innerHTML = "";
        documentos.forEach((documento) => {
            let fila = document.createElement("tr");
            let nombreCelda = document.createElement("td");
            let apellidoCelda = document.createElement("td");
            nombreCelda.textContent = documento.nombre;
            apellidoCelda.textContent = documento.apellidos;
            fila.appendChild(nombreCelda);
            fila.appendChild(apellidoCelda);
            bodyTabla.appendChild(fila);
        });
    };

    // Al enviar los datos por los input, se activa "enviarDocumento"
    enviarBtn.addEventListener("click", enviarDocumento);

    obtenerDocumentos();
});