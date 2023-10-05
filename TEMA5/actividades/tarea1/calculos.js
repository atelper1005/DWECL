/**     Moda
 *  a) No tenga moda
 *  b) Solamente se repite un número respecto a los demás el cual sería ese
 *  c) Existen 2 modas =  2 opciones:
 *      
 *      c.1) Si existe al menos algún valor entre ellos --- serían ambos las modas
 *      c.2) Si no existe ningún valor entre ellos --- la moda sería la media de ambos valores
 */



function calcularMedia() {
    var suma = valores
}

function calcularRango() {

}

function calcularModa() {

}

function anadirValores() {
    var valores = [];
    var num = 0;

    for (var i = 0; !isNaN(num) && num != null; i++) {
        num = Number(prompt("Añada valores numéricos " + "\nValores añadidos: " + i + " \n(Si desea dejar de añadir valores pulse cualquier valor no numérico)"));
        valores [i] = num;
    }
    return valores;
}