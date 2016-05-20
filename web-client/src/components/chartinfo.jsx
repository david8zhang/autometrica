var React = require('react');
var Reflux = require('reflux');
var Highcharts = require('highcharts');
var Chart = require('./hchart');
var DataStore = require('../stores/data-store');
var Actions = require('../actions');

module.exports = React.createClass({
    componentWillMount: function() {
        Actions.getData();
    },
    render: function() {
        return <div className="chart-info">
            <Chart container={this.props.containerid}/>
        </div>
    }
})
