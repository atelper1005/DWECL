function() {
function mostrarMenu() {
    var opcion = Number(prompt("Elija una opción: \n1. Elegir figura geométrica \n2. Ingresar medidas \n3. Calcular volumen \n4. Calcular área \n5. Finalizar programa"));
    var figura;
    var dimensiones;

    function elegirFigura() {
        figura = prompt("Elige una figura geométrica: cubo, esfera, cilindro");
    }
    
    function ingresarMedidas() {
        switch (figura) {
            case 'cubo':
                dimensiones = prompt("Introduce la longitud del lado del cubo");
                break;
            case 'esfera':
                dimensiones = prompt("Introduce el radio de la esfera");
                break;
            case 'cilindro':
                dimensiones = prompt("Introduce el radio y la altura del cilindro, separados por una coma");
                break;
            default:
                alert("Figura no reconocida");
                f1();
        }
    }

     function calcularVolumen() {
        let volumen;
        switch (figura) {
            case 'cubo':
                volumen = Math.pow(dimensiones, 3);
                break;
            case 'esfera':
                volumen = (4/3) * Math.PI * Math.pow(dimensiones, 3);
                break;
            case 'cilindro':
                let [radio, altura] = dimensiones.split(',').map(Number);
                volumen = Math.PI * Math.pow(radio, 2) * altura;
                break;
        }
        alert(`El volumen de la ${figura} es ${volumen}`);
    }

    function calcularArea() {
        let area;
        switch (figura) {
            case 'cubo':
                area = 6 * Math.pow(dimensiones, 2);
                break;
            case 'esfera':
                area = 4 * Math.PI * Math.pow(dimensiones, 2);
                break;
            case 'cilindro':
                let [radio, altura] = dimensiones.split(',').map(Number);
                area = 2 * Math.PI * radio * (radio + altura);
                break;
        }
        alert(`El área de la ${figura} es ${area}`);
    }

    if (opcion === null) {
        return;
    }

    switch (opcion) {
        case '1':
            elegirFigura();
            mostrarMenu();
            break;

        case '2':
            ingresarMedidas();
            mostrarMenu();
            break;

        case '3':
            calcularVolumen();
            mostrarMenu();
            break;

        case '4':
            calcularArea();
            mostrarMenu();
            break;

        case '5':
            alert("Programa finalizado");
            break;

        default:
            alert("Opción no valida, elija de nuevo");
            mostrarMenu();
            break;
    }
}
    
}

mostrarMenu();
