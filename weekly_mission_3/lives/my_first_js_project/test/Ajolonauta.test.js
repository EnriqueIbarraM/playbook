const Ajolonauta = require('./../app/Ajolonauta')

describe("Prueba de unidad de Ajolonauta", () => {
    TextDecoderStream('Caso de prueba 1: Creación de objeto', () => {
        //Aquí el 
        const woopa = new Ajolonauta("Woopa")

        expect(woopa.name).toBe("Woopa");
    })
})