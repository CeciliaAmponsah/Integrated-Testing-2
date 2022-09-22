const { sum, multiply, divide,subtract } = require("./math");

beforeAll(() => {
    console.log("Before All Test")
})

describe("Function", () => {
    beforeEach(() => {
        console.log("Before Each")
    })
    it("should sum two number", () => {
        expect(sum(2, 3)).toBe(5)
    })
    it("should subtract two number", () => {
        expect(subtract(5, 3)).toBe(2)
    })
    it("should multiply two number", () => {
        expect(multiply(3, 3)).toBe(9)
    })
    it("should divid two number", () => {
        expect(divide(12, 3)).toBe(4)
    })
    afterEach(() => {
      console.log("After each Test");
    });
    afterAll(() => {
      console.log(" Run after all Test");
    });

})
