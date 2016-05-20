var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
    listenables: [Actions],
    getData: function() {
        return Api.get('all')
        .then(function(json) {
            console.log(json.Items);
            this.data_items = json.Items;
            this.triggerChange();
        }.bind(this));
    },
    triggerChange: function() {
        console.log(this.data_items);
        this.trigger('change', this.data_items);
    }
});
