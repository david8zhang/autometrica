var React = require('react');
var Reflux = require('reflux');
var Highcharts = require('highcharts');
var DataStore = require('../stores/data-store');
var Actions = require('../actions');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(DataStore, "onChange")
    ],
    componentWillMount: function() {
        Actions.getData();
    },
    getInitialState: function() {
        return {
            data_items: [],
            chart: null
        }
    },
    // When the DOM is ready, create the chart.
    componentDidMount: function () {
        // Extend Highcharts with modules
        if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
        var options = {
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },

            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        };
        // Set container which the chart should render to.
        this.setState({
            chart: new Highcharts[this.props.type || "Chart"](
                        this.props.container,
                        options
                    )
        });
    },
    //Destroy chart before unmount.
    componentWillUnmount: function () {
        this.chart.destroy();
    },
    render: function() {
        return <div id={this.props.container}>
        </div>
    },
    onChange: function() {
        dates = []
        items = []
        DataStore.data_items.map(function(item) {
            dates.push(item.data_timestamp);
            if(item.scale < 5) {
                items.push(parseInt(item.scale))
            }
        });
        var options = {
            xAxis: {
                categories: dates
            },
            yAxis: {
                tickInterval: 5
            },
            series: [{
                data: items
            }]
        }
        this.setState({
            chart: new Highcharts[this.props.type || "Chart"] (
                this.props.container,
                options
            )
        })
    }
})
