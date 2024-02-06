interface GrupoBot {
    add(): void;
    rest(): void;
  }
  
  class Boton {
    constructor(private num: number) {}
  
    crearBoton(): void {
      const btn = $("<button></button>").text(`Botón ${this.num}`);
      btn.on("click", () => alert(`Pulsaste el botón ${this.num}`));
      $("#div1").append(btn);
    }
  }
  
  class GrupoBot implements GrupoBot {
    private contador = 0;
  
    add(): void {
      this.contador++;
      new Boton(this.contador).crearBoton();
    }
  
    rest(): void {
      if (this.contador > 0) {
        this.contador--;
        $("#div1 button:last").remove();
      }
    }
  }
  
  const grupoBot = new GrupoBot();
  
  $(window).on("load", () => {
    $("#crear").on("click", () => grupoBot.add());
    $("#borrar").on("click", () => grupoBot.rest());
  });
