function Lampara() {
    this.intensidad=0;
    this.prender=()=>{
        if (this.intensidad<10){
            this.intensidad++;
        }
    }
    this.apagar= ()=>{
        this.intensidad=0;
    }
    this.cambiar =()=>{
        //this.prendida = !this.prendida;
    }
}

module.exports=Lampara;