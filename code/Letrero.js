const Lampara = require("./Lampara");

//Refactor 1: Preserve whole object


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
    this.encender = (cuadrado)=>{
        let esquinaID=cuadrado.get_esquinaID();
        let esquinaSI=cuadrado.get_esquinaSI();
        for (f=esquinaSI[0];f<=esquinaID[0];f++){
            for (c=esquinaSI[1];c<=esquinaID[1];c++){
                this.luces[f][c].prender();
            }
        }
    }
    this.apagar = (cuadrado)=>{
        let esquinaID=cuadrado.get_esquinaID();
        let esquinaSI=cuadrado.get_esquinaSI();
        for (f=esquinaSI[0];f<=esquinaID[0];f++){
            for (c=esquinaSI[1];c<=esquinaID[1];c++){
                this.luces[f][c].apagar();
            }
        }
    }
    this.cambiar = (cuadrado) =>{
        let esquinaID=cuadrado.get_esquinaID();
        let esquinaSI=cuadrado.get_esquinaSI();
        for (f=esquinaSI[0];f<=esquinaID[0];f++){
            for (c=esquinaSI[1];c<=esquinaID[1];c++){
                this.luces[f][c].cambiar();
            }
        }
    }
}

module.exports = Letrero;
