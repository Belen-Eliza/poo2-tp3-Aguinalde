const Letrero = require("../code/Letrero");
test("Cuántas hay encendidas",()=>{
    var letrero = new Letrero();
    expect(letrero.cantPrendidas()).toBe(0);
});

test("Cuántas hay encendidas después de prender una",()=>{
    var letrero = new Letrero();
    letrero.encender("0,0")
    expect(letrero.cantPrendidas()).toBe(1);
});