var React = require('react');

module.exports = React.createClass({
    render: function() {
        return <div className="featuremodule">
            <h4>{this.props.title}</h4>
            <p>{this.props.description}</p>
            <i className={this.props.iconName}></i>
        </div>
    }
})
