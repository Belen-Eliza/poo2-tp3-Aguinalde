function Letrero(){
    this.cantPrendidas= ()=>{
        return 0;
    }
    this.encender = (esquinaSI, esquinaID)=>{
        var cant=(esquinaID[0]-esquinaSI[0]+1)*(esquinaID[1]-esquinaSI[1]+1);
        this.cantPrendidas=()=>{
            return cant;
        }
    }
}

module.exports = Letrero;
