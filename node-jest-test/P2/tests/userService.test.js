const { getUserName } = require("../src/userService");

// Simulate the api module to avoid real HTTP requests
jest.mock("../src/api", () => ({
    fetchUser: jest.fn(),
}));

const { fetchUser } = require("../src/api");

describe("userService", () => {
    test("should return the user name from API", async () => {
        // Mock the fetchUser function to return a specific user
        fetchUser.mockResolvedValue({ id: 1, name: "Leanne Graham" });

        const name = await getUserName(1);

        expect(name).toBe("Leanne Graham");
        expect(fetchUser).toHaveBeenCalledWith(1);
    });
});
