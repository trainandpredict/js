// Store the endpoint URL to save typing
const endpoint = 'https://trainandpredict.com/api';

// Instantiate the Axios object
const axios = require('axios');

// Write our object
const tap = {
    logEvent: function (api_token, user_id, item_id) {
        const response = axios.post(endpoint + '/log/' + user_id + '/' + item_id + '?api_token=' + api_token);

        return response;
    },
    logEventAsync: async function (api_token, user_id, item_id) {
        const response = await axios.post(endpoint + '/log/' + user_id + '/' + item_id + '?api_token=' + api_token);

        return response;
    },
    recommendForUser: function (api_token, user_id) {
        const response = axios.get(endpoint + '/rec/user/' + user_id + '?api_token=' + api_token);

        return response;
    },
    recommendForUserAsync: async function (api_token, user_id) {
        const response = await axios.get(endpoint + '/rec/user/' + user_id + '?api_token=' + api_token);

        return response;
    },
    recommendForItem: function (api_token, item_id) {
        const response = axios.get(endpoint + '/rec/item/' + item_id + '?api_token=' + api_token);

        return response;

    },
    recommendForItemAsync: async function (api_token, item_id) {
        const response = await axios.get(endpoint + '/rec/item/' + item_id + '?api_token=' + api_token);

        return response;
    },
};

module.exports = tap;
