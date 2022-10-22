function CuadradoInvalidoException(){
    const error = new Error();
    return error;
}

CuadradoInvalidoException.prototype=Object.create(Error.prototype);
module.exports =CuadradoInvalidoException;