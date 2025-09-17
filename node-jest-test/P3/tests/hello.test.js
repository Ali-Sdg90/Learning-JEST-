const { testFunction } = require("../src/hello");

describe("testFunction", () => {
    test("should return the sum of two numbers", () => {
        expect(testFunction(2, 3)).toBe(5);
    });

    test("should return the sum of two numbers", () => {
        expect(testFunction(101, 3)).toBe(104);
    });
});
