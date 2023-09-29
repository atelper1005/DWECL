function mostrarMenu() {
    var opcion = Number(prompt("Elija una opción: \n1. Elegir figura geométrica \n2. Ingresar medidas \n3. Calcular volumen \n4. Calcular área \n5. Finalizar programa"));

    if (opcion === null) {
        return;
    }

    switch (opcion) {
        case 1:
            elegirFigura();
            break;

        case 2:
            ingresarMedidas();
            break;

        case 3:
            calcularVolumen();
            break;

        case 4:
            calcularArea();
            break;

        case 5:
            alert("Programa finalizado");
            break;

        default:
            alert("Opción no valida, elija de nuevo");
            mostrarMenu();
            break;
    }
}

function elegirFigura() {
    var figura = Number(prompt("Elija una figura geométrica: \n1. Cubo \n2. Esfera \n3. Cilindro"));

    if(figura === null) {
        alert("Opción no valida, elija de nuevo");
        mostrarMenu();
        return;
    } else if(figura === 1) {
        alert("Cubo seleccionado")
        
    } else if(figura === 2) {
        alert("Esfera seleccionada")
        
    } else if(figura === 3) {
        alert("Cilindro seleccionado")
        
    } else {
        alert("Opción no válida, elija de nuevo")
        return elegirFigura();
    }

    mostrarMenu();
}

function ingresarMedidas() {

    if(elegirFigura() == 1) {
        prompt("Ingrese el lado del cubo (en cm): ");
        
    } else if (figuraElegida == 2) {
        prompt("Ingrese el radio de la esfera (en cm): ");
        
    } else if (figuraElegida == 3) {
        prompt("Ingrese radio del cilindro (en cm)");
        prompt("Ingrese la altura del cilindro (en cm): ");
        
    }

    mostrarMenu();
}

function calcularVolumen() {
    // utilizando las medidas almacenadas previamente y lo mostraríamos en una ventana emergente

    mostrarMenu();
}

function calcularArea() {
    // utilizando las medidas almacenadas previamente y lo mostraríamos en una ventana emergente

    mostrarMenu();
}