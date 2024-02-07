interface GrupoBot {
    add(): void;
    rest(): void;
  }
  
  class Boton {
    // el constructor recibe el número del botón como parámetro
    constructor(private num: number) {}
  
    //Creamos un boton y asociamos evento click
    crearBoton(): void {
      const btn = $("<button></button>").text(`${this.num}`);
      btn.on("click", () => alert(`Pulsaste el botón ${this.num}`));
      //Agregamos el boton al elemento HTML con id "div1"
      $("#div1").append(btn);
    }
  }
  
  class GrupoBot implements GrupoBot {
    private contador = 0;
    
    //Metodo agregar boton
    add(): void {
      this.contador++;
      new Boton(this.contador).crearBoton();
    }
  
    //Metodo eliminar boton
    rest(): void {
      //Verificamos si hay botones que borrar
      if (this.contador > 0) {
        this.contador--;
        //Eliminamos el último boton añadido al elemento div1
        $("#div1 button:last").remove();
      }
    }
  }
  
  const grupoBot = new GrupoBot();
  
  //Asignamos eventos a los botones crear y borrar al cargar la pagina
  $(window).on("load", () => {
    $("#crear").on("click", () => grupoBot.add());
    $("#borrar").on("click", () => grupoBot.rest());
  });
