class Articulo {
  static contador = 0;

  constructor(nombre, precio, cantidad) {
    this.codigo = Articulo.generarCodigo();
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  static generarCodigo() {
    Articulo.contador++;
    return Articulo.contador;
  }
}

class Cesta {
  constructor() {
    this.articulos = [];
  }

  calcularSubtotal(articulo) {
    return articulo.precio * articulo.cantidad;
  }

  mostrarDetalles(articulo) {
    return `${articulo.codigo} \t ${articulo.nombre} \t ${articulo.precio}€ \t ${articulo.cantidad} \t ${this.calcularSubtotal(articulo)}€`;
  }

  verCesta() {
    if (this.articulos.length === 0) {
      alert("La cesta está vacía.");
    } else {
      var tabla = "Cod. \t Nombre \t Precio(€) \t Cantidad \t Subtotal(€)\n";
      tabla += this.articulos.map((articulo) => this.mostrarDetalles(articulo)).join('\n');
      var totalArticulos = this.articulos.reduce((acumulador, articulo) => acumulador + articulo.cantidad, 0);
      var totalPrecio = this.articulos.reduce((acumulador, articulo) => acumulador + this.calcularSubtotal(articulo), 0);
      tabla += `\nTotal \t \t \t \t ${totalArticulos} \t ${totalPrecio}€`;
      alert(tabla);
    }
  }

  insertarArticulo(nombre, precio, cantidad) {
    var nuevoArticulo = new Articulo(nombre, precio, cantidad);
    this.articulos.push(nuevoArticulo);
    alert("Artículo insertado en la cesta con código: " + nuevoArticulo.codigo);
  }

  borrarArticulo(codigo) {
    const nuevosArticulos = this.articulos.filter((articulo) => articulo.codigo !== codigo);

    if (nuevosArticulos.length === this.articulos.length) {
      alert("No se encontró ningún artículo con ese código en la cesta.");
    } else {
      this.articulos = nuevosArticulos;
      alert("Artículo borrado de la cesta.");
    }
  }

  vaciarCesta() {
    if (confirm("¿Está seguro de que desea vaciar la cesta?")) {
      this.articulos = [];
      alert("La cesta ha sido vaciada.");
    }
  }
}

function mostrarMenu() {
  var cesta = new Cesta();

  while (true) {
    const opcion = prompt(
      "Menú:\n" +
      "1. Ver cesta\n" +
      "2. Insertar un artículo\n" +
      "3. Borrar un artículo\n" +
      "4. Vaciar cesta\n" +
      "5. Salir\n" +
      "Ingrese el número de la opción:"
    );

    switch (opcion) {
      case "1":
        cesta.verCesta();
        break;
      case "2":
        var nombre = prompt("Ingrese el nombre del artículo:");
        var precio = parseFloat(prompt("Ingrese el precio del artículo:"));
        var cantidad = parseInt(prompt("Ingrese la cantidad del artículo:"));
        cesta.insertarArticulo(nombre, precio, cantidad);
        break;
      case "3":
        var codigo = parseInt(prompt("Ingrese el código del artículo que desea borrar:"));
        cesta.borrarArticulo(codigo);
        break;
      case "4":
        cesta.vaciarCesta();
        break;
      case "5":
        alert("Gracias por usar la simulación de la cesta de compra.");
        return;
      default:
        alert("Opción no válida. Por favor, elija una opción del 1 al 5.");
    }
  }
}

mostrarMenu();
