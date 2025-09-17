const mockFetchUser = jest
    .fn()
    .mockResolvedValue({ id: 2, name: "Ervin Howell" });

jest.mock("../src/api", () => ({
    fetchUser: mockFetchUser,
}));

const { getName } = require("../src/getName");

describe("getName", () => {
    test("should return the user name from API", async () => {
        const name = await getName(2);
        expect(name).toBe("Ervin Howell");
        expect(mockFetchUser).toHaveBeenCalledWith(2);
    });
});
