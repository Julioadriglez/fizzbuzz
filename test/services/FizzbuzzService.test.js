const FizzbuzzService= require("./../../lib/services/FizzbuzzService");

describe("Puevas de unidad para FizzbuzzServices", () => {
    test("1. Prueba no divisible entre 3 y 5", () => {
        const explorer1 = {"name": "Explorer1", "score": 1};
        const explorerscore = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerscore.trick).toBe(1);
    });
    test("2. Prueba divisible entre 3 Fizz", () =>{
        const explorer3 = {name: "Explorer3", score: 3};
        const explorerscore = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorerscore.trick).toBe("FIZZ");
    });
    test("3. Prueba divisible entre 5 BUZZ", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const explorerscore = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorerscore.trick).toBe("BUZZ");
    });
    test("4. Prueba divisible entre 5 y 3 FIZZBUZZ", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const explorerscore = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorerscore.trick).toBe("FIZZBUZZ");
    });

});