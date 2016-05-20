var React = require('react')

module.exports = React.createClass({
    render: function() {
        var units;
        switch(this.props.type){
            case "time":
                units = "pm"
                break;
            case "burn":
                units = "units"
                break;
            default:
                units = "units"
        }

        return <div className={"dash-info " + this.props.color}>
            <div className="data-text">
                <p className="dash-title">{this.props.value + " " + units}</p>
                <p className="dash-subtitle">{this.props.info}</p>
            </div>
        </div>
    }
})
