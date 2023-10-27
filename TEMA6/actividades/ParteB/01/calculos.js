// Objeto para representar un artículo
  function articulo(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

// Función para calcular el subtotal de un artículo
  articulo.prototype.subtotal = function() {
    return this.precio * this.cantidad;
  };

  // Función para mostrar los detalles de un artículo
  articulo.prototype.mostrarDetalles = function() {
    return `${this.id}\t${this.nombre}\t${this.precio}\t${this.cantidad}\t${this.subtotal()}`;
  };

//Funcion añadir articulos
 function insertarArticulo() {
    var id = prompt("Ingrese el id del artículo:");
    var nombre = prompt("Ingrese el nombre del artículo:");
    var precio = parseFloat(prompt("Ingrese el precio del artículo:"));
    var cantidad = parseInt(prompt("Ingrese la cantidad del artículo:"));

    // Verificar si el artículo ya está en la cesta
    var articuloExistente = cesta.find(function (articulo) {
      return articulo.id === id;
    });

    if (articuloExistente) {
      articuloExistente.cantidad += cantidad;
    } else {
      var nuevoArticulo = new articulo(id, nombre, precio, cantidad);
      cesta.push(nuevoArticulo);
    }

    alert("Artículo insertado en la cesta.");
  }

 // Función para borrar un artículo de la cesta
  function borrarArticulo() {
    var id = prompt("Ingrese el id del artículo que desea borrar:");

    // Filtrar los artículos que no tienen el código proporcionado
    var nuevosArticulos = cesta.filter(function (articulo) {
      return articulo.id !== id;
    });

    if (nuevosArticulos.length === cesta.length) {
      alert("No se encontró ningún artículo con ese código en la cesta.");
    } else {
      cesta = nuevosArticulos;
      alert("Artículo borrado de la cesta.");
    }
  }

  var cesta = [];

//Función para mostrar la cesta
 function verCesta() {
    
    if (cesta.length === 0) {
      alert("La cesta está vacía.");
    } else {
      var tabla = "Id.\tNombre\tPrecio\tCantidad\tSubtotal\n";
      tabla += cesta.map(function (articulo) {
        return articulo.mostrarDetalles();
      }).join('\n');
      var total = cesta.reduce(function (acumulador, articulo) {
        return acumulador + articulo.subtotal();
      }, 0);
      tabla += `\nTotal\t\t\t\t\t${total}`;
      alert(tabla);
    }
  }

// Función para vaciar la cesta
  function vaciarCesta() {
    if (confirm("¿Está seguro de que desea vaciar la cesta?")) {
      cesta = [];
      alert("La cesta ha sido vaciada.");
    }
  }

//Funcion crear menu que recoge la opcion seleccionada y activa la funcion correspondiente
function opcionesMenu() {
    var salir = false;
    while(!salir) {
        var opcion = prompt("Menú:\n" +
        "1. Ver cesta\n" +
        "2. Insertar un artículo\n" +
        "3. Borrar un artículo\n" +
        "4. Vaciar cesta\n" +
        "5. Salir\n" +
        "Ingrese el número de la opción:");

    switch(opcion) {
        case "1":
            verCesta();
            break;
        
        case "2":
            insertarArticulo();
            break;

        case "3":
            borrarArticulo();
            break;

        case "4":
            vaciarCesta();
            break;

        case "5":
            alert("¡Gracias por comprar!");
            salir = true;
            break;
            
        default:
            alert("Opción invalida");
    }

    }

}

opcionesMenu();
