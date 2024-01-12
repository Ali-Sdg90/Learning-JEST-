const stringLogger = require("./string");

test("Can I Log String?", () => {
    expect(stringLogger.logger()).toEqual("Hello");
});
