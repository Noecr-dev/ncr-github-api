const axios = require('axios');

module.exports = {
    /**
     * @description Introduce a Github user for get your data
     * @example
     * user = 'mugan86'
     * @param {string} user username we want get data
     */
    getUserData: function(user) {
        const url = `https://api.github.com/users/${user}`;
        return axios.get(url)
            .then(
                data => data.data
            )
            .catch(
                err => console.log(err)
            );
    }
}