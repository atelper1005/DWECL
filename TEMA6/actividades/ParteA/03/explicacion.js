/**
 * Funciones necesarias para la actividad:
 *  - Recoja los datos
 *  - Otra que haga los calculos
 */

function recojaDatos() {
    var matrizZonas = [];   //Matriz que guarda las zonas
    var zonas = [];         //Array que recoje las temperaturas de una zona
    var numPrompt = 0;      //Recoge los numeros que se pasan por el prompt
    var contadorZona = 0;   //Indica zona actual
    var temperatura = 0;    //Indica la temperatura introducida

    while(true) {           //While true es infinito hasta que hagas un break/return
        numPrompt = prompt("Introduzca valores \nTemperaturas añadidas: " + temperatura + "\nZona actual: " + contadorZona 
        + "\nPulse c para pasar a la siguiente zona" + "\nPulse f para terminar de introducir datos")

        if(numPrompt === f && zonas.length > 0) {  //Si pulsamos f y no se ha añadido ningun valor al array termina el programa, añadiendo el ultimo array a la matriz
            matrizZonas.push(zonas);
            break;
        } else if (numPrompt === c) {
            matrizZonas.push(zonas);            //Introduce la zona actual (array) en la matriz
            zonas = [];                         //Creamos un array vacio cada vez que añadimos un array a la matriz
            contadorZona++;                     //Incrementa el contador de zonas añadidas
        } else {
            numPrompt = Number(numPrompt);      //Variable que convierte los valores introducidos en numerico
            zonas.push(numPrompt);              //Introducir cada valor en el array actual
            temperatura++;                      //Incrementar el contador de valores introducidos
        }
        temperatura = 0;                        //Reinicia el contador de temperatura cada vez que pulsamos la c
    }
    return matrizZonas;                         //Retornar los valores añadidos a la matriz

}

function mediaTemperaturas(valores) {           //
    var matrizAnterior = valores;               //La matriz se iguala a los valores que le vamos a pasar
    var mediaZona = 0;                          //Variable para almacenar la media de la zona actual
    var mediaTotal = 0;                         //Variable para almacenar la media de todas las temperaturas
    var valoresTotales = 0;

    for(var i = 0; i < matrizAnterior.length; i++) {                                //Para iterar y recorrer un array multidimensional/matriz hay que usar un for dentro de otro for
            mediaZona = matrizAnterior[i].reduce(function(a,b){return a+b;});       //el primer for recorre el indice i de la matriz
            alert("La media de la zona es: " + mediaZona.toFixed(2));               //Alerta que de el resultado de las medias de cada zona
        for(var j = 0; j < matrizAnterior[i].length; j++) {                         //el segundo for recorre el indice j de la matriz con indice i recorrido (matriz[i])
            mediaTotal += matrizAnterior[i][j];
            valoresTotales++;
        }
    }

    alert("La media total de las temperaturas es: " + mediaTotal);                  //Alerta que de el resultado de la media total de las temperaturas
}

function ejecucion() {                  //Funcion para ejecutar el programa que se carga en el body del html
    var nums = 0;
    if(nums === 0) {
        nums = recojaDatos();
    }

    mediaTemperaturas(nums);
}