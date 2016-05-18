var React = require('react');

module.exports = React.createClass({
    render: function() {
        return <a href="#">
            <div className="sidebar-item">
                    <div className="sidebar-item-icon"></div>
                    <p>{this.props.text}</p>
            </div>
        </a>

    }
})
