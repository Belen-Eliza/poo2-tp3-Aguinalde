function Letrero(){
    this.cantPrendidas= ()=>{
        return 0;
    }
    this.encender = ()=>{
        this.cantPrendidas=()=>{
            return 1;
        }
    }
}

module.exports = Letrero;
