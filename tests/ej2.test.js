const Lampara = require("../code/Lampara");

var lampara;
beforeEach(()=>{
    lampara = new Lampara();
});

test("Chequear intensidad",()=>{
    expect(lampara.intensidad).toBe(0);
})

test("Prender y chequear intensidad",()=>{
    lampara.prender();
    expect(lampara.intensidad).toBe(1);
})

test("Subir intensidad dos veces",()=>{
    lampara.prender();
    lampara.prender();
    expect(lampara.intensidad).toBe(2);
})

test("Subir intensidad mas de 10 veces",()=>{  
    for (let k=0; k<11;k++){
        lampara.prender();
    }
    expect(lampara.intensidad).toBe(10);
})


test("Bajar la intensidad",()=>{
    lampara.prender();
    lampara.apagar()
    expect(lampara.intensidad).toBe(0);
})

test("Subir intensidad dos veces y luego bajarla",()=>{
    lampara.prender();
    lampara.prender();
    lampara.apagar()
    expect(lampara.intensidad).toBe(1);
})

test("Bajar intensidad mas de 10 veces",()=>{
    for (let k=0; k<11;k++){
        lampara.apagar();
    }
    expect(lampara.intensidad).toBe(0);
})

test("Cambiar intensidad",()=>{  
    lampara.cambiar();
    expect(lampara.intensidad).toBe(2);
})


test("Cambiar intensidad dos veces",()=>{
    lampara.cambiar();
    lampara.cambiar();
    expect(lampara.intensidad).toBe(4);
})

test("Cambiar intensidad cuando estaba en 9",()=>{
    for (let k=0; k<9;k++){
        lampara.prender();
    }
    lampara.cambiar();
    expect(lampara.intensidad).toBe(10);
})
