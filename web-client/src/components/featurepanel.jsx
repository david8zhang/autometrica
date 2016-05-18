var React = require('react');
var FeatureModule = require('./featuremodule');

module.exports = React.createClass({
    render: function() {
        return <section className="featurePanel">
            <h2>Features</h2>
            <div className="row">
                <div className="small-12 large-4 columns">
                    <FeatureModule
                        title="Feature 1"
                        description="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,"
                        iconName="fi-graph-trend"/>
                </div>
                <div className="small-12 large-4 columns">
                    <FeatureModule
                        title="Feature 2"
                        description="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,"
                        iconName="fi-database"/>
                </div>
                <div className="small-12 large-4 columns">
                    <FeatureModule
                        title="Feature 3"
                        description="Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,"
                        iconName="fi-graph-pie"/>
                </div>
            </div>
        </section>
    }
})
