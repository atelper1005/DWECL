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
            var numerosTexto =  prompt("Ingresa números separados por comas:");

            // Convierte los números de texto a un array de números
            var numeros = numerosTexto.split(',').map(function(num) {
                return parseFloat(num);
            });

            // Filtra los elementos no numéricos
            numeros = numeros.filter(function(num) {
                return !isNaN(num);
            });

            if (numeros.length === 0) {
                alert("Por favor, ingresa números válidos.");
                return;
            }

            //console.log(numeros);

            // Calcula la media
            alert("La media es " + calcularMedia(numeros));

            // Calcula el rango
            alert("El rango es " + calcularRango(numeros));

            // Calcula la moda
            alert("La moda es " + calcularModa(numeros));

        }

        function calcularMedia(numeros) {
            var suma = numeros.reduce(function(acc, num) {
                return acc + num;
            }, 0);
            return suma / numeros.length;
        }

        function calcularRango(numeros) {
            var min = numeros[0];
            var max = numeros[0];

            for(var i = 1; i < numeros.length; i++) {
                if(numeros[i] < min) {
                    min = numeros[i];
                }
                if(numeros[i] > max) {
                    max = numeros[i];
                }
            }

            return max - min;
        }

        function calcularModa(numeros) {
            var conteo = {};
            var moda = [];
            var maxFrecuencia = 0;

            // Contar la frecuencia de cada número
            numeros.forEach(function(num) {
                conteo[num] = (conteo[num] || 0) + 1;
                if (conteo[num] > maxFrecuencia) {
                    maxFrecuencia = conteo[num];
                }
            });

            // Encontrar los números con la frecuencia máxima (puede haber múltiples)
            for (var num in conteo) {
                if (conteo.hasOwnProperty(num) && conteo[num] === maxFrecuencia) {
                    moda.push(parseFloat(num));
                }
            }

            return moda;
        }

