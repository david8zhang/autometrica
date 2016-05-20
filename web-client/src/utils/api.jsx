var Fetch = require('whatwg-fetch');
var rootUrl = 'https://autometrica-api.herokuapp.com/api/v1/data/'

module.exports = {
    get: function(url) {
        return fetch(rootUrl + url)
        .then(function(response) {
            return response.json();
        })
    }
}
