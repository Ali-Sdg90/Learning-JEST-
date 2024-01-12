import { Test1 } from "../index";

describe("First Test", () => {
    it("Test 1", () => {
        const testcase1 = new Test1();

        expect(testcase1.aloha).toBe("hello");
    });
});
