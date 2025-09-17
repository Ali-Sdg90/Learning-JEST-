const axios = require("axios");

const fetchUser = async (id) => {
    const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return res.data;
};

module.exports = { fetchUser };
