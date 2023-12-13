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
class Cesta {
  constructor() {
      this.productos = [];
      this.iva = 0.21; // IVA del 21%
  }

  agregarProducto(producto, cantidad) {
      this.productos.push({ producto: producto, cantidad: cantidad });
  }

  eliminarProducto(id) {
      this.productos = this.productos.filter(producto => producto.producto.id !== id);
  }

  calcularSubtotal() {
      let subtotal = 0;
      this.productos.forEach(producto => {
          subtotal += producto.producto.precio * producto.cantidad;
      });
      return subtotal;
  }

  calcularTotal() {
      return this.calcularSubtotal() + (this.calcularSubtotal() * this.iva);
  }
}

//Clase Productos, Clase Cesta y Clase ConstruirCesta