const Letrero = require("../code/Letrero");
test("Cuántas hay encendidas",()=>{
    letrero = new Letrero();
    expect(letrero.cantPrendidas()).toBe(0);
});