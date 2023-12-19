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
      this.divisa = '€';
      this.contProductos = new ContProductos();
      this.DOMitems = document.querySelector('#items');
      this.DOMcarrito = document.querySelector('#carrito');
      this.DOMtotal = document.querySelector('#total');
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
          miNodoPrecio.textContent = `${info.precio}${this.divisa}`;
          const miNodoBoton = document.createElement('button');
          miNodoBoton.classList.add('btn', 'btn-primary');
          miNodoBoton.textContent = 'Añadir';
          miNodoBoton.setAttribute('marcador', info.id);
          miNodoBoton.addEventListener('click', () => this.anyadirProductoAlCarrito(info.id));
          miNodoCardBody.appendChild(miNodoImagen);
          miNodoCardBody.appendChild(miNodoTitle);
          miNodoCardBody.appendChild(miNodoPrecio);
          miNodoCardBody.appendChild(miNodoBoton);
          miNodo.appendChild(miNodoCardBody);
          this.DOMitems.appendChild(miNodo);
      });
  }

  anyadirProductoAlCarrito(id) {
      this.carrito.push(id);
      this.renderizarCarrito();
      this.guardarCarritoEnLocalStorage();
  }

  renderizarCarrito() {
    this.DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(this.carrito)];
    carritoSinDuplicados.forEach((item) => {
        // Busca el producto directamente en la lista de productos
        const miItem = this.contProductos.productos.find((itemProducto) => itemProducto.id === parseInt(item));
        const numeroUnidadesItem = this.carrito.reduce((total, itemId) => (itemId === item ? total + 1 : total), 0);
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem.nombre} - ${miItem.precio}${this.divisa}`;
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', () => this.borrarItemCarrito(item));
        miNodo.appendChild(miBoton);
        this.DOMcarrito.appendChild(miNodo);
    });
    this.DOMtotal.textContent = this.calcularTotal();
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