class Producto {
  constructor(id, nombre, precio, imagen) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
  }
}

class ContProductos {
  constructor() {
      this.productos = [
          new Producto(1, 'Zapatos', 45, "https://loremflickr.com/320/240/shoes"),
          new Producto(2, 'Móvil', 199.99, "https://loremflickr.com/320/240/smartphone"),
          new Producto(3, 'Vestido', 30, "https://loremflickr.com/320/240/dress"),
          new Producto(4, 'Ratón inalámbrico', 15.5, "https://loremflickr.com/320/240/wireless_mouse"),
          new Producto(5, 'Maceta', 27.9, "https://loremflickr.com/320/240/flowerpot"),
          new Producto(6, 'Collar', 50, "https://loremflickr.com/320/240/necklace"),
      ];
  }
}

class Cesta {
  constructor() {
      this.carrito = [];
      this.contProductos = new ContProductos();
      this.DOMitems = document.querySelector('#items');
      this.DOMcarrito = document.querySelector('#carrito');
      this.DOMtotal = document.querySelector('#total');
      this.DOMtotalIVA = document.querySelector('#totalIVA')
      this.DOMbotonVaciar = document.querySelector('#boton-vaciar');
      this.miLocalStorage = window.localStorage;
  }

  renderizarProductos() {
      const contProductos = new ContProductos();
      contProductos.productos.forEach((info) => {
          const miNodo = document.createElement('div');
          miNodo.classList.add('card', 'col-sm-4');
          const miNodoCardBody = document.createElement('div');
          miNodoCardBody.classList.add('card-body');
          const miNodoTitle = document.createElement('h5');
          miNodoTitle.classList.add('card-title');
          miNodoTitle.textContent = info.nombre;
          const miNodoImagen = document.createElement('img');
          miNodoImagen.classList.add('img-fluid');
          miNodoImagen.setAttribute('src', info.imagen);
          const miNodoPrecio = document.createElement('p');
          miNodoPrecio.classList.add('card-text');
          miNodoPrecio.textContent = `${info.precio}€`;
          const miNodoBoton = document.createElement('button');
          miNodoBoton.classList.add('btn', 'btn-primary');
          miNodoBoton.textContent = 'Añadir';
          miNodoBoton.setAttribute('marcador', info.id);
          miNodoBoton.addEventListener('click', () => this.anadirProductoCarrito(info.id));
          miNodoCardBody.appendChild(miNodoImagen);
          miNodoCardBody.appendChild(miNodoTitle);
          miNodoCardBody.appendChild(miNodoPrecio);
          miNodoCardBody.appendChild(miNodoBoton);
          miNodo.appendChild(miNodoCardBody);
          this.DOMitems.appendChild(miNodo);
      });
  }

  anadirProductoCarrito(id) {
      this.carrito.push(id);
      this.renderizarCarrito();
      this.guardarCarritoEnLocalStorage();
  }

  renderizarCarrito() {
    this.DOMcarrito.textContent = '';

    // Objeto para hacer un seguimiento de los productos únicos y su cantidad
    const productosUnicos = {};

    // Calcular la cantidad de cada producto en el carrito
    this.carrito.forEach((item) => {
        productosUnicos[item] = (productosUnicos[item] || 0) + 1;
    });

    // Renderizar el carrito
    for (const itemId in productosUnicos) {
        if (productosUnicos.hasOwnProperty(itemId)) {
            var cantidad = productosUnicos[itemId];
            const miItem = this.contProductos.productos.find((itemProducto) => itemProducto.id === parseInt(itemId));

            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${cantidad} x ${miItem.nombre} - ${miItem.precio}€`;

            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = itemId;
            miBoton.addEventListener('click', () => this.borrarItemCarrito(itemId));

            miNodo.appendChild(miBoton);
            this.DOMcarrito.appendChild(miNodo);
        }
    }
    this.DOMtotal.textContent = this.calcularTotal();
    this.DOMtotalIVA.textContent = this.calcularTotalIVA();
}

  borrarItemCarrito(id) {
      this.carrito = this.carrito.filter((carritoId) => carritoId !== id);
      this.renderizarCarrito();
      this.guardarCarritoEnLocalStorage();
  }

  calcularTotal() {
    return this.carrito.reduce((total, item) => {
        const miItem = this.contProductos.productos.find((itemProducto) => itemProducto.id === parseInt(item));
        return total + miItem.precio;
    }, 0).toFixed(2);
}

calcularTotalIVA() {
    var totalSinIVA = this.calcularTotal();
    const iva = 0.21;
    var totalConIVA = totalSinIVA * (1 + iva);
    return totalConIVA.toFixed(2);
}

  vaciarCarrito() {
      this.carrito = [];
      this.renderizarCarrito();
      this.miLocalStorage.clear();
  }

  guardarCarritoEnLocalStorage() {
      this.miLocalStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  cargarCarritoDeLocalStorage() {
      if (this.miLocalStorage.getItem('carrito') !== null) {
          this.carrito = JSON.parse(this.miLocalStorage.getItem('carrito'));
      }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const cesta = new Cesta();
  cesta.cargarCarritoDeLocalStorage();
  cesta.renderizarProductos();
  cesta.renderizarCarrito();

  cesta.DOMbotonVaciar.addEventListener('click', () => cesta.vaciarCarrito());
});