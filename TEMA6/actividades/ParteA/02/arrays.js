function recogerDatos() {
    var matriz = [];
    var fila = [];
    var numIntro = 0;
    var conteo = 0;
    
    while(true) {
      numIntro = prompt("Introduzca un valor" + "\nFilas actuales: " + conteo + "\nPulse c para añadir otra fila" + "\nPulse f para salir")

      if(numIntro === 'f' || numIntro === 'F' || numIntro === null || numIntro === 0) {
          if (fila.length > 0) {
            matriz.push(fila);
          }
        break;
      } else if (numIntro === 'c' || numIntro === 'c') {
        matriz.push(fila);
        fila = [];
        conteo ++;
      } else {
        numIntro = Number(numIntro);
        fila.push(numIntro);
      }
    }

    return matriz;
}

function separarArrays(nums) {
    var matrizNums = nums;

    var pares = [];
    var impares = [];

    for (var i = 0; i < matrizNums.length; i++) {
      for (var j = 0; j < matrizNums[i].length; j++) {
        if (matrizNums[i][j] % 2 == 0) {
          pares.push(matrizNums[i][j]);
        } else {
          impares.push(matrizNums[i][j]); 
        }
      }
    }
    pares.sort(function (a, b) { return a - b; });
    impares.sort(function (a, b) { return a - b; });

    if (pares.length === 0){
      alert("Numeros pares: No hay" + "\nNumeros impares: " + impares.toString());
    } else if (impares.length === 0){
      alert("Numeros pares: " + pares.toString() + "\nNumeros impares: No hay");
    } else{
      alert("Numeros pares: " + pares.toString() + "\nNumeros impares: " + impares.toString());
    }
}

function ejecucion() {
  var nums = 0;
  if (nums == 0) {
    nums = recogerDatos();
  }
  separarArrays(nums);
}
