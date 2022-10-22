function validarCuadrado(esquinaSI,esquinaID){
    let filas = esquinaID[0]-esquinaSI[0];
    let columnas=esquinaID[1]-esquinaSI[1];
    if (filas<0 || columnas<0){
        throw new Error("Cuadrado invalido");
    }
    
}
module.exports =validarCuadrado;