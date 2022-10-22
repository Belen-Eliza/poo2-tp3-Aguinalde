function Lampara() {
    this.intensidad=0;
    this.prender=()=>{
        this.intensidad=1;
    }
    this.apagar= ()=>{
        //this.prendida=false;
    }
    this.cambiar =()=>{
        //this.prendida = !this.prendida;
    }
}

module.exports=Lampara;