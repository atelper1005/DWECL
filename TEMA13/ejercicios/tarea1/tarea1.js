"use strict";
class Boton {
    constructor(num) {
        this.num = num;
    }
    crearBoton() {
        const btn = $("<button></button>").text(`Botón ${this.num}`);
        btn.on("click", () => alert(`Pulsaste el botón ${this.num}`));
        $("#div1").append(btn);
    }
}
class GrupoBot {
    constructor() {
        this.contador = 0;
    }
    add() {
        this.contador++;
        new Boton(this.contador).crearBoton();
    }
    rest() {
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
