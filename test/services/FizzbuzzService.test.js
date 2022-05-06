const FizzbuzzService= require('./../../lib/services/FizzbuzzService')
const fs = require("fs");

describe("Puevas de unidad para FizzbuzzServices", () => {
    test("1. Prueba no divisible entre 3 y 5", () => {
        const explorer1 = {"name": "Explorer1", "score": 1}
        const explorerscore = FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorerscore.trick).toBe(1)
    });
    test("2. Prueba divisible entre 3 Fizz", () =>{
        const explorer3 = {name: "Explorer3", score: 3}
        const explorerscore = FizzbuzzService.applyValidationInExplorer(explorer3)
        expect(explorerscore.trick).toBe("FIZZ")
    })
})