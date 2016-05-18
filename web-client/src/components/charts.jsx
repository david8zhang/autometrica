var React = require('react');
var Sidebar = require('./sidebar');

module.exports = React.createClass({
    render: function() {
        options = ['option 1', 'option 2', 'option 3'];
        return <div>
            <Sidebar items={options}/>
        </div>
    }
})
