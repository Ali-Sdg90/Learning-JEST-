import { sum } from "./index";
import { Aloha } from "./index2";

test("Test TS", () => {
    expect(sum(1, 2)).toEqual(3);
});

test("Test Aloha", () => {
    expect(Aloha()).toEqual("Aloha");
});
