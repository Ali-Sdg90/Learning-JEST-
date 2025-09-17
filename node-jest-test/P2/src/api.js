const axios = require("axios");

async function fetchUser(userId) {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return response.data;
}

module.exports = { fetchUser };
