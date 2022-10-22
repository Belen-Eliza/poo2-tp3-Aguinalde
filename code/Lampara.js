function Lampara() {
    this.prendida =false;
    this.intensidad=0;
    this.prender=()=>{
        this.prendida=true;
    }
    this.apagar= ()=>{
        this.prendida=false;
    }
    this.cambiar =()=>{
        this.prendida = !this.prendida;
    }
}

module.exports=Lampara;