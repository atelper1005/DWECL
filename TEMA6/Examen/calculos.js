function recogidaDatos() {
    var matrizDependencias = [];            //Matriz que guarda las dependencias
    var dependencias = [];                  //Array que recoje los consumos de una dependencia
    var numPrompt = 0;                      //Recoge los numeros que se pasan por el prompt
    var contadorDependecia = 0;             //Indica dependencia actual
    var tomaCorriente = 0;                  //Indica la toma de corriente introducida

    while(true) {           //While true es infinito hasta que hagas un break/return
        
        numPrompt = prompt("Introduzca valores \nTomas añadidas: " + tomaCorriente + "\nDependencia actual: " + contadorDependecia  
        + "\nPulse c para pasar a la siguiente dependencia" + "\nPulse f para terminar de introducir datos")

        if(numPrompt === f && dependencias.length > 0 || numPrompt < 0) {  //Si pulsamos f y no se ha añadido ningun valor al array termina el programa, 
            matrizDependencias.push(dependencias);                         //añadiendo el ultimo array a la matriz
            break;
        } else if (numPrompt === c) {
            matrizDependencias.push(dependencias);            //Introduce la zona actual (array) en la matriz
            dependencias = [];                         //Creamos un array vacio cada vez que añadimos un array a la matriz
            contadorDependecia++;                     //Incrementa el contador de zonas añadidas
        } else {
            numPrompt = Number(numPrompt);      //Variable que convierte los valores introducidos en numerico
            dependencias.push(numPrompt);              //Introducir cada valor en el array actual
            tomaCorriente++;                      //Incrementar el contador de valores introducidos
        }
        tomaCorriente = 0;                        //Reinicia el contador de temperatura cada vez que pulsamos la c
    }
    return matrizDependencias;                         //Retornar los valores añadidos a la matriz
}

function consumoMax(valores) {
    var matrizAnterior = valores;
    var maxDependencia = [];
    var dependencia = 0
    
    for(var i = 0; i < matrizAnterior.length; i++) {
        dependencia = matrizAnterior[i];
        var maxConsumo = 0;

        for(var j = 0; j < dependencia.length; j++) {
            var consumo = dependencia[j];

            if(consumo > maxConsumo) {
                maxConsumo = consumo;
            }
        }

        maxDependencia.push(maxConsumo);
    }

    return maxDependencia;
}

function mayor2kwh(matrizConsumo) {
    var dependencias2 = [];
  
  for (let i = 0; i < matrizConsumo.length; i++) {
    let dependencia = matrizConsumo[i];
    for (var consumo of dependencia) {
      if (consumo > 2) {
        dependencias2.push(i+1);
        break;
      }
    }
  }
  
  return dependenciasSuperiores;
}

function ejecucion() {
    var nums = 0;
    if(nums === 0) {
        nums = recogidaDatos();
    }

    consumoMax(nums);
    mayor2kwh(nums);
}