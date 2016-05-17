var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    render: function() {
        return <Link to="/" className="notext-decorate">
            <nav className="top-bar navbar-desktop">
            <h1>{this.props.title}</h1>
            </nav>
        </Link>
    }
})
