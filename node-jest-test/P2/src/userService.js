const { fetchUser } = require("./api");

async function getUserName(userId) {
    const user = await fetchUser(userId);
    return user.name;
}

module.exports = { getUserName };
