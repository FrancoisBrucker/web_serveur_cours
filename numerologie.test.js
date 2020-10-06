numerologie = require("./numerologie")

describe("Un chiffre à un prenom", () => {
    test("somme des nombres", () => {
        expect(numerologie.somme("A")).toBe(6+5)
    })

})
