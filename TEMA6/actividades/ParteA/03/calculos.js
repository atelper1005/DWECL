function entradaDatos() {
    var matriz = [];
    var zona = [];
    var numIntro = 0;
    var conteo = 0;
    
    while(true) {
      numIntro = prompt("Introduzca un valor" + "\nZonas actuales: " + conteo + "\nPulse c para añadir otra zona" + "\nPulse f para salir")

      if(numIntro === 'f' || numIntro === 'F' || numIntro === null || numIntro === 0 || numIntro <= 0) {
          if (zona.length > 0) {
            matriz.push(zona);
          }
        break;
      } else if (numIntro === 'c' || numIntro === 'c') {
        matriz.push(zona);
        zona = [];
        conteo ++;
      } else {
        numIntro = Number(numIntro);
        zona.push(numIntro);
      }
    }

    return matriz;
}

// function calcularMediasZonas(zona) {
//       var suma = zona.reduce(function (a, b) {

//         return a + b;
//       }, 0);
//       return suma / zona.length;
//   }

function mediasTotales(valores) {
    const calcularMediasZonas = mediaZona => mediaZona.reduce((a, b) => a + b, 0); //Hace la funcion calcularMediasZonas
    var media = valores;         //Ingresamos los valores
    var mediaZona = 0;          //Variable que coge las medias de cada zona
    var elementosMatriz = 0;    //El elemento matriz hace el conteo de la segunda iteracion
    var mediaTotal = 0;         //V
    for(var i = 0; i < media.length; i++) {
        media[i];
        mediaZona = calcularMediasZonas(media[i]);
        alert("La media de la zona es: " + mediaZona.toFixed(2) + "ºC");
        for(var j = 0; j < media[i].length; j++) {
            mediaTotal += media[i][j];
            elementosMatriz++;
        }
        
    }

    alert("La media total es: " + (mediaTotal/elementosMatriz).toFixed(2) + "ºC")
    
}

function ejecucion() {
  var nums = 0;
  if (nums == 0) {
    nums = entradaDatos();
  }
//   calcularMediasZonas(zona);
//   calcularMeditaTotal(mediasPorZona);
  mediasTotales(nums);
}