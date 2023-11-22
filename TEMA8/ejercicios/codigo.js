// Estructura del producto
class Producto {
  constructor(id, nombre, precio, cantidad, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.imagen = imagen;
  }
}

// Estructura del carrito
class Carrito {
  constructor() {
    this.productos = [];
  }

  // Método para agregar productos al carrito
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  // Método para calcular el total
  calcularTotal() {
    let total = 0;
    this.productos.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });
    return total;
  }

  // Método para calcular el total con IVA
  calcularTotalConIva() {
    return this.calcularTotal() * 1.21;
  }
}

//BBDD de los productos de la tienda
var productos = [
  [1, "Zapatos", 45, "https://loremflickr.com/320/240/shoes"],
  [2, "Móvil", 99.99, "https://loremflickr.com/320/240/smartphone"],
  [3, "Vestido", 30, "https://loremflickr.com/320/240/dress"],
  [4, "Ratón", 15.5, "https://loremflickr.com/320/240/wireless_mouse"],
  [5, "Maceta", 27.9, "https://loremflickr.com/320/240/flowerpot"],
  [6, "Collar", 50, "https://loremflickr.com/320/240/necklace"],
];
// Crear carrito
var carrito = new Carrito();

// Añadir productos al carrito
document.getElementById("catalogo").addEventListener("click", (event) => {
  if (event.target.classList.contains("agregar-producto")) {
    const id = event.target.dataset.id;
    const producto = productosDisponibles.find(
      (producto) => producto.id === parseInt(id)
    );
    carrito.agregarProducto(producto);
    mostrarCarrito();
  }
});
