// Store the endpoint URL to save typing
const endpoint = 'https://trainandpredict.com/api';

// Instantiate the Axios object
const axios = require('axios');

// Write our object
const tap = {
    logEvent: function (api_key, user_id, item_id) {
        const response = axios.post(endpoint + '/log/' + user_id + '/' + item_id + '?api_key=' + api_key);

        return response;
    },
    logEventAsync: async function (api_key, user_id, item_id) {
        const response = await axios.post(endpoint + '/log/' + user_id + '/' + item_id + '?api_key=' + api_key);

        return response;
    },
    recommendForUser: function (api_key, user_id) {
        const response = axios.get(endpoint + '/rec/user/' + user_id + '?api_key=' + api_key);

        return response;
    },
    recommendForUserAsync: async function (api_key, user_id) {
        const response = await axios.get(endpoint + '/rec/user/' + user_id + '?api_key=' + api_key);

        return response;
    },
    recommendForItem: function (api_key, item_id) {
        const response = axios.get(endpoint + '/rec/item/' + item_id + '?api_key=' + api_key);

        return response;

    },
    recommendForItemAsync: async function (api_key, item_id) {
        const response = axios.get(endpoint + '/rec/item/' + item_id + '?api_key=' + api_key);

        return response;
    },
};

module.exports = tap;
