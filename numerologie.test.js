numerologie = require("./numerologie")

describe("Un chiffre à un prenom", () => {
    test("somme des nombres", () => {
        expect(numerologie.somme(65)).toBe(6+5)
    })
    test("<=9", () => {
        expect(numerologie.sommeFinale(65)).toBe(2)
    })
})
