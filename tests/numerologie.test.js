numerologie = require("../static/numerologie")

describe("Un chiffre à un prenom", () => {
    test("somme des nombres", () => {
        expect(numerologie.somme(65)).toBe(6+5)
    })
    test("<=9", () => {
        expect(numerologie.sommeFinale(65)).toBe(2)
    })
    test("nombre associé au prénom d'une lettre", () => {
        expect(numerologie.nombre("A")).toBe(2)
    })
    test("nombre associé au prénom de plusieurs lettres", () => {
        expect(numerologie.nombre("A")).toBe(2)
        expect(numerologie.nombre("m")).toBe(1)
        expect(numerologie.nombre("y")).toBe(4)
        expect(numerologie.nombre("Amy")).toBe(2 + 1 + 4)
    })

})
