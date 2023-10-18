function recogerDatos() {
    var matriz = [];
    var nums = 0;
    var i = 0;
    

    while(true) {
        nums  = prompt("Introduce el valor " + i + "\nPulse c para añadir una línea" + "\nPulse f para finalizar");

        if(isNaN == true || nums == null || nums == "f") {
            break;
        } else {
            for (i = 0; i < filas; i++) {
                matriz.push([]);
                for (var j = 0; j < columnas; j++) {
                  matriz[i].push(nums ++) = prompt("Ingrese el valor para la fila " + (i + 1) + " y columna " + (j + 1));
                }
              }
    
              alert(matriz[i])
        }

    }
    return matriz;
}

function separarArrays() {

}

/* let matriz = [];

for (let i = 0; i < filas; i++) {
  matriz[i] = [];
  for (let j = 0; j < columnas; j++) {
    matriz[i][j] = prompt("Ingrese el valor para la fila " + (i+1) + " y columna " + (j+1));
  }
}

*/