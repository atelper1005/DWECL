/**
 *                              Mediana
 *   Existen 2 opciones de mediana:
 *
 *      1) Si existe un valor central, ese es la mediana
 *      2) Si hay 2 valores centrales, hacer la media de ambos valores para hallar la mediana
 */

function calcularResultados() {
  // Obtén los números ingresados por el usuario
  var numerosTexto = prompt("Ingresa números separados por comas:");

  // Convierte los números de texto a un array de números
  var numeros = numerosTexto.split(",").map(function (num) {
    return parseFloat(num);
  });

  // Filtra los elementos no numéricos
  numeros = numeros.filter(function (num) {
    return !isNaN(num);
  });

  if (numeros.length === 0) {
    alert("Por favor, ingresa números válidos.");
    return;
  }

  //console.log(numeros);
  alert ("El array ordenado es: " + numeros.sort(function (a,b){return a-b})) ;
  // Calcula la mediana
  alert("La mediana es " + calcularMediana(numeros));
}

function calcularMediana(numeros) {
  numeros.sort(function (a, b) {
    return a - b;
  });

  var mediana;
  var mitad = Math.floor(numeros.length / 2);

  if (numeros.length % 2 === 0) {
    // Si el número de elementos es par, calcular el promedio de los dos elementos centrales
    mediana = (numeros[mitad - 1] + numeros[mitad]) / 2;
  } else {
    // Si el número de elementos es impar, la mediana es el valor del elemento central
    mediana = numeros[mitad];
  }

  return mediana;
}
