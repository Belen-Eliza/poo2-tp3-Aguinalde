const Letrero = require("../code/Letrero");
const validarCuadrado =require("../code/validar");
var letrero;
beforeEach(()=>{
    letrero = new Letrero();
})

test("Cuántas hay encendidas",()=>{
    expect(letrero.cantPrendidas()).toBe(0);
});

test("Cuántas hay encendidas después de prender una",()=>{
    letrero.encender([0,0],[0,0]);
    expect(letrero.cantPrendidas()).toBe(1);
});

test("Cuántas hay encendidas después de prender un cuadrado de 2x2",()=>{
    letrero.encender([0,0],[1,1]);
    expect(letrero.cantPrendidas()).toBe(4);
});

test("Cuántas hay encendidas después de prender una columna de 1x3",()=>{
    letrero.encender([0,0],[2,0]);
    expect(letrero.cantPrendidas()).toBe(3);
});

test("Cuántas hay encendidas después de prender una fila de 5x1",()=>{
    letrero.encender([0,0],[0,4]);
    expect(letrero.cantPrendidas()).toBe(5);
});

test("Cuántas hay encendidas después de prender una y luego otra",()=>{
    letrero.encender([0,0],[0,0]);
    letrero.encender([1,0],[1,0]);
    expect(letrero.cantPrendidas()).toBe(2);
});

test("Cuántas hay encendidas después de prender una dos veces",()=>{
    letrero.encender([0,0],[0,0]);
    letrero.encender([0,0],[0,0]);
    expect(letrero.cantPrendidas()).toBe(1);
});

test("Cuántas hay encendidas después de prender una y apagarla",()=>{
    letrero.encender([0,0],[0,0]);
    letrero.apagar([0,0],[0,0]);
    expect(letrero.cantPrendidas()).toBe(0);
});

test("Cambiar el estado de una luz que estaba apagada",()=>{
    var letrero = new Letrero();
    letrero.cambiar([0,0],[0,0]);
    expect(letrero.luces[0][0].prendida).toBe(true);
});

test("Cambiar el estado de una luz que estaba prendida",()=>{
    letrero.encender([0,0],[0,0]);
    letrero.cambiar([0,0],[0,0]);
    expect(letrero.luces[0][0].prendida).toBe(false);
});

test("Cambiar el estado de un cuadrado con luces prendidas y apagadas",()=>{
    letrero.encender([0,0],[0,1]);
    letrero.cambiar([0,0],[1,1]);
    resultado =[letrero.luces[0][0].prendida,letrero.luces[0][1].prendida,letrero.luces[1][0].prendida,letrero.luces[1][1].prendida];
    expect(resultado).toEqual([false,false,true,true]);
});

test("Validar cuadrado",()=>{
    expect(()=>{letrero.validarCuadrado([1,1],[0,0])}).toThrow(new Error("Cuadrado invalido"));
});