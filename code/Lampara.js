function Lampara() {
    this.intensidad=0;
    this.prender=()=>{
        if (this.intensidad<10){
            this.intensidad++;
        }
    }
    this.apagar= ()=>{
        if (this.intensidad>0){
            this.intensidad--;
        }
    }
    this.cambiar =()=>{
        this.intensidad=2;
    }
}

module.exports=Lampara;