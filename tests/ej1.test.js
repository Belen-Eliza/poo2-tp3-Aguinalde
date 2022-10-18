const Letrero = require("../code/Letrero");
test("Cuántas hay encendidas",()=>{
    var letrero = new Letrero();
    expect(letrero.cantPrendidas()).toBe(0);
});

test("Cuántas hay encendidas después de prender una",()=>{
    var letrero = new Letrero();
    letrero.encender([0,0],[0,0]);
    expect(letrero.cantPrendidas()).toBe(1);
});

test("Cuántas hay encendidas después de prender un cuadrado de 2x2",()=>{
    var letrero = new Letrero();
    letrero.encender([0,0],[1,1]);
    expect(letrero.cantPrendidas()).toBe(4);
});

test("Cuántas hay encendidas después de prender una columna de 1x3",()=>{
    var letrero = new Letrero();
    letrero.encender([0,0],[2,0]);
    expect(letrero.cantPrendidas()).toBe(3);
});

test("Cuántas hay encendidas después de prender una fila de 5x1",()=>{
    var letrero = new Letrero();
    letrero.encender([0,0],[0,4]);
    expect(letrero.cantPrendidas()).toBe(5);
});