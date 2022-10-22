var validarCuadrado = function (esquinaSI,esquinaID){
    let filas = esquinaID[0]-esquinaSI[0];
    let columnas=esquinaID[1]-esquinaSI[1];
    if (filas<0 || columnas<0){
        throw new Error("Cuadrado invalido");
    }
}

function Cuadrado(esquinaSI,esquinaID){
    validarCuadrado(esquinaSI,esquinaID);
    let esquina_ID =esquinaID;
    let esquina_SI= esquinaSI;
    this.get_esquinaSI=()=>{
        return esquina_ID;
    }

    this.get_esquinaID = ()=>{
        return esquina_SI;
    }
}
module.exports={Cuadrado,validarCuadrado};