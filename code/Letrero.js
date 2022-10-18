const Lampara = require("./Lampara");

function crearCuadricula(cantfilas,cantcolumnas){
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
    this.cantPrendidas= ()=>{
        let encendidas=0;
        this.luces.forEach(fila =>{
            fila.forEach(lampara=>{
                if (lampara.prendida){
                    encendidas++;
                }
            })
        });
        return encendidas;
    }
    this.encender = (esquinaSI, esquinaID)=>{
        for (f=esquinaSI[0];f<=esquinaID[0];f++){
            for (c=esquinaSI[1];c<=esquinaID[1];c++){
                this.luces[f][c].prender();
            }
        }
    }
    this.apagar = (esquinaSI, esquinaID)=>{
        for (f=esquinaSI[0];f<=esquinaID[0];f++){
            for (c=esquinaSI[1];c<=esquinaID[1];c++){
                this.luces[f][c].apagar();
            }
        }
    }
    this.cambiar = (esquinaSI, esquinaID) =>{
        for (f=esquinaSI[0];f<=esquinaID[0];f++){
            for (c=esquinaSI[1];c<=esquinaID[1];c++){
                this.luces[f][c].prender();
            }
        }
    }
}

module.exports = Letrero;
