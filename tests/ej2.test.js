const Lampara = require("../code/Lampara");
const Letrero = require("../code/Letrero");

var letrero;
beforeEach(()=>{
    letrero = new Letrero();
});

test("Chequear intensidad",()=>{
    let lampara=new Lampara();
    expect(lampara.intensidad).toBe(0);
})