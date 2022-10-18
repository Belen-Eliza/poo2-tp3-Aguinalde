function Lampara() {
    this.prendida =false;
    this.prender=()=>{
        this.prendida=true;
    }
    this.apagar= ()=>{
        this.prendida=false;
    }
}

module.exports=Lampara;