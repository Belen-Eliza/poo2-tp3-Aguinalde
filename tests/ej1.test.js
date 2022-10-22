const Letrero = require("../code/Letrero");
const {Cuadrado,validarCuadrado}=require("../code/Cuadrado");
const CuadradoInvalidoException = require("../code/CuadradoInvalidoException");
beforeEach(()=>{
    letrero = new Letrero();
})

test("Cuántas hay encendidas",()=>{
    expect(letrero.cantPrendidas()).toBe(0);
});

test("Cuántas hay encendidas después de prender una",()=>{
    let cuadrado=new Cuadrado([0,0],[0,0]);
    letrero.encender(cuadrado);
    expect(letrero.cantPrendidas()).toBe(1);
});

test("Cuántas hay encendidas después de prender un cuadrado de 2x2",()=>{
    let cuadrado=new Cuadrado([0,0],[1,1]);
    letrero.encender(cuadrado);
    expect(letrero.cantPrendidas()).toBe(4);
});

test("Cuántas hay encendidas después de prender una columna de 3x1",()=>{
    let cuadrado=new Cuadrado([0,0],[2,0]);
    letrero.encender(cuadrado);
    expect(letrero.cantPrendidas()).toBe(3);
});

test("Cuántas hay encendidas después de prender una fila de 1x5",()=>{
    let cuadrado=new Cuadrado([0,0],[0,4]);
    letrero.encender(cuadrado);
    expect(letrero.cantPrendidas()).toBe(5);
});

test("Cuántas hay encendidas después de prender una y luego otra",()=>{
    let cuadrado1=new Cuadrado([0,0],[0,0]);
    letrero.encender(cuadrado1);
    let cuadrado2=new Cuadrado([1,0],[1,0]);
    letrero.encender(cuadrado2);
   
    expect(letrero.cantPrendidas()).toBe(2);
});

test("Cuántas hay encendidas después de prender una dos veces",()=>{
    let cuadrado=new Cuadrado([0,0],[0,0]);
    letrero.encender(cuadrado);
    letrero.encender(cuadrado);
    expect(letrero.cantPrendidas()).toBe(1);
});

test("Cuántas hay encendidas después de prender una y apagarla",()=>{
    let cuadrado=new Cuadrado([0,0],[0,0]);
    letrero.encender(cuadrado);
    letrero.apagar(cuadrado);
    expect(letrero.cantPrendidas()).toBe(0);
});

test("Validar cuadrado",()=>{
    expect(()=>{validarCuadrado([1,1],[0,0])}).toThrow(new CuadradoInvalidoException());
});

test("Validar cuadrado valido",()=>{
    expect(()=>{validarCuadrado([0,0],[1,1])}).not.toThrow(new CuadradoInvalidoException());
});
