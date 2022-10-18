function Letrero(){
    this.encendidas=0;
    this.cantPrendidas= ()=>{
        return this.encendidas;
    }
    this.encender = (esquinaSI, esquinaID)=>{
        var cant=(esquinaID[0]-esquinaSI[0]+1)*(esquinaID[1]-esquinaSI[1]+1);
        this.encendidas+= cant;
    }
}

module.exports = Letrero;
