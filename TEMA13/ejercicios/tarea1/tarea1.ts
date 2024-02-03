interface btn_principal {
    add(): number;
    rest(): number;
}

class GrupoBot implements btn_principal {
    private contador: number;

    constructor() {
        this.contador = 2; // Inicializamos con 2 botones estáticos
        this.initEventHandlers();
    }

    private initEventHandlers(): void {
        // Event handler para el botón de añadir
        $('#addButton').on('click', () => this.add());
        // Event handler para el botón de restar
        $('#restButton').on('click', () => this.rest());
    }

    public add(): void {
        const newButton = new Boton(this.contador);
        newButton.render();
        this.contador++;
    }

    public rest(): void {
        if (this.contador > 2) {
            $('#buttonContainer').children().last().remove();
            this.contador--;
        }
    }
}

class Boton {
    private numero: number;

    constructor(numero: number) {
        this.numero = numero;
    }

    public render(): void {
        const button = $('<button></button>').text('Botón ' + this.numero);
        button.on('click', () => alert('Mensaje del Botón ' + this.numero));
        $('#buttonContainer').append(button);
    }
}

// Instanciamos la clase GrupoBot una sola vez
const grupoBot = new GrupoBot();
