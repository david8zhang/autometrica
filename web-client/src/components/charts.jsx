var React = require('react');
var Sidebar = require('./sidebar');
var ChartContent = require('./chartcontent');

module.exports = React.createClass({
    render: function() {
        options = ['option 1', 'option 2', 'option 3'];
        return <div className="row charts-page">
            <div className="small-12 large-2 columns charts-page">
                <Sidebar items={options}/>
            </div>
            <div className="small-12 large-10 columns charts-page">
                <ChartContent />
            </div>
        </div>
    }
})
