const axios = require('axios');

const tap = {
    logEvent: function (api_key, user_id, item_id) {
        const response = axios.post('https://trainandpredict.com/api/log/' + user_id + '/' + item_id + '?api_key=' + api_key);

        return response;
    },
    logEventAsync: async function (api_key, user_id, item_id) {
        const response = await axios.post('https://trainandpredict.com/api/log/' + user_id + '/' + item_id + '?api_key=' + api_key);

        return response;
    },
    recommendForUser: function (api_key, user_id) {
        const response = axios.get('https://trainandpredict.com/api/rec/user/' + user_id + '?api_key=' + api_key);

        return response;
    },
    recommendForUserAsync: async function (api_key, user_id) {
        const response = await axios.get('https://trainandpredict.com/api/rec/user/' + user_id + '?api_key=' + api_key);

        return response;
    },
    recommendForItem: function (api_key, item_id) {
        const response = axios.get('https://trainandpredict.com/api/rec/item/' + item_id + '?api_key=' + api_key);

        return response;

    },
    recommendForItemAsync: async function (api_key, item_id) {
        const response = axios.get('https://trainandpredict.com/api/rec/item/' + item_id + '?api_key=' + api_key);

        return response;
    },
};

module.exports = tap;
