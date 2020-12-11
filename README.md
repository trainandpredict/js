# T&P for JavaScript

This is a JavaScript package to make it more convenient for developers to interact with our Recommendation API.

The package essentially consists of a very basic JavaScript object.

```
const tap = require('trainandpredict');

// This is your API key, found in your T&P settings
const api_key = 'abcdefg12345';

// Log an event for user ID 1234 on item ID 5678
tap.log(api_key, 1234, 5678);

// Get recommendations for user ID 1234
const user_rec = tap.recommendForUser(api_key, 1234);

// Get recommendations for item ID 5678
const item_rec = tap.recommendForItem(api_key, 5678);
```

We also have an asynchronous version of each function, which is especially handy for the logging endpoint.

Here are the full object contents in `index.js`, in case they're helpful:

```
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
        const response = await axios.get(endpoint + '/rec/item/' + item_id + '?api_key=' + api_key);

        return response;
    },
};

module.exports = tap;
```
