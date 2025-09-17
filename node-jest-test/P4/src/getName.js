const { fetchUser } = require("./api");

const getName = async (id) => {
    const user = await fetchUser(id);
    return user.name;
};

// getName(2).then((name) => console.log(name));

module.exports = { getName };
