const Lampara = require("./Lampara");

function crearCuadricula(cantfilas,cantcolumnas){
    //verificar cantidad
    let grilla= new Array(cantfilas);
    for (f=0;f<cantfilas;f++){
        let fila=new Array(cantcolumnas);
        for (c=0;c<cantcolumnas;c++){
            fila[c]=new Lampara();
        }
        grilla[f]=fila;
    }
    return grilla;
}

function Letrero(){
    this.luces=crearCuadricula(100,100);
    this.validarCuadrado = function (esquinaSI,esquinaID){
        let filas = esquinaID[0]-esquinaSI[0];
        let columnas=esquinaID[1]-esquinaSI[1];
        if (filas<0 || columnas<0){
            throw new Error("Cuadrado invalido");
        }
    }
    this.cantPrendidas= ()=>{
        let encendidas=0;
        this.luces.forEach(fila =>{
            fila.forEach(lampara=>{
                if (lampara.intensidad>0){
                    encendidas++;
                }
            })
        });
        return encendidas;
    }
    this.encender = (esquinaSI, esquinaID)=>{
        this.validarCuadrado(esquinaSI,esquinaID);
        for (f=esquinaSI[0];f<=esquinaID[0];f++){
            for (c=esquinaSI[1];c<=esquinaID[1];c++){
                this.luces[f][c].prender();
            }
        }
    }
    this.apagar = (esquinaSI, esquinaID)=>{
       
        this.validarCuadrado(esquinaSI,esquinaID);
        for (f=esquinaSI[0];f<=esquinaID[0];f++){
            for (c=esquinaSI[1];c<=esquinaID[1];c++){
                this.luces[f][c].apagar();
            }
        }
    }
    this.cambiar = (esquinaSI, esquinaID) =>{
      
        this.validarCuadrado(esquinaSI,esquinaID);
        for (f=esquinaSI[0];f<=esquinaID[0];f++){
            for (c=esquinaSI[1];c<=esquinaID[1];c++){
                this.luces[f][c].cambiar();
            }
        }
    }
}

module.exports = Letrero;
