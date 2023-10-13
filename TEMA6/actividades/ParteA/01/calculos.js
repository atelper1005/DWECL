/**
 *                              Moda
 *  a) No tenga moda
 *  b) Solamente se repite un número respecto a los demás el cual sería ese
 *  c) Existen 2 modas =  2 opciones:
 *
 *      c.1) Si existe al menos algún valor entre ellos --- serían ambos las modas
 *      c.2) Si no existe ningún valor entre ellos --- la moda sería la media de ambos valores
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
