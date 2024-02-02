interface btn_principal {
    add(): number;
    rest(): number;
}

class GrupoBot implements btn_principal {
    private contador: number;
    constructor(contador:number) {
        this.contador = contador;
    }

}