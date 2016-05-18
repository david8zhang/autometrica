var React = require('react');
var JumboTron = require('./jumbotron');
var FeaturePanel = require('./featurepanel');
var Navbar = require('./navbar');

module.exports = React.createClass({
    render: function() {
        return <div className="general-content">
            <Navbar title="Autometrica"/>
            {this.content()}
        </div>
    },
    content: function() {
        if(this.props.children) {
            return this.props.children;
        } else {
            return <div className="main-content">
                <JumboTron/>
                <FeaturePanel/>
            </div>
        }
    }
});
