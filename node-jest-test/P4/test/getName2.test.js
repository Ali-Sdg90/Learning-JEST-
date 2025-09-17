const mockFetchUser = jest.fn();

jest.mock("../src/api", () => ({
    fetchUser: mockFetchUser,
}));

const { getName } = require("../src/getName");

describe("getName", () => {
    beforeEach(() => {
        mockFetchUser.mockClear();
    });

    test("should return user name for valid id", async () => {
        mockFetchUser.mockResolvedValue({ id: 1, name: "Leanne Graham" });

        const name = await getName(1);

        expect(name).toBe("Leanne Graham");
        expect(mockFetchUser).toHaveBeenCalledWith(1);
    });

    test("should return different names for different calls", async () => {
        mockFetchUser
            .mockResolvedValueOnce({ id: 2, name: "Ervin Howell" })
            .mockResolvedValueOnce({ id: 3, name: "Clementine Bauch" });

        const name1 = await getName(2);
        const name2 = await getName(3);

        expect(name1).toBe("Ervin Howell");
        expect(name2).toBe("Clementine Bauch");
        expect(mockFetchUser).toHaveBeenCalledTimes(2);
    });

    test("should throw error if user not found", async () => {
        mockFetchUser.mockRejectedValue(new Error("User not found"));

        await expect(getName(999)).rejects.toThrow("User not found");
        expect(mockFetchUser).toHaveBeenCalledWith(999);
    });
});
