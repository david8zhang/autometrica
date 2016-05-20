var React = require('react');
var DashInfo = require('./dashinfo');
var ChartInfo = require('./chartinfo');

module.exports = React.createClass({
    getInitialState: function() {
        var init_peak_burn =  Math.floor(Math.random() * 12 + 1)
        var init_avg_burn =  Math.floor(Math.random() * 100 + Math.random() + 100 / 10);
        var init_peak_mot =  Math.floor(Math.random() * 100 + Math.random() + 100 / 10);

        return {
            peakburn: init_peak_burn,
            avgburn: init_avg_burn,
            peakmot: init_peak_mot
        }
    },
    render: function() {
        return <section className="chart-content">
            <div className="row dash-header">
                <div className="small-12 large-4 columns dash">
                    <DashInfo
                        info="Peak Burnout Time"
                        color="blue"
                        value={this.state.peakburn}
                        type="time"/>
                </div>
                <div className="small-12 large-4 columns dash">
                    <DashInfo
                        info="Average Daily Burnout"
                        color="green"
                        value={this.state.avgburn}
                        type="burn"/>
                </div>
                <div className="small-12 large-4 columns dash">
                    <DashInfo
                        info="Peak Motivation Time"
                        color="red"
                        value={this.state.peakmot}
                        type="time"/>
                </div>
                <div className="small-12 large-12 columns">
                    <ChartInfo containerid="container 1"/>
                </div>
            </div>
        </section>
    }
})
