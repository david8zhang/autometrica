var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    render: function() {
        return <section className="jumbo">
            <h1>Sexy A$$ Data</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit .</p>
            <Link to="charts" className="notext-decorate">
                <button type="button" className="success button">See Charts</button>
            </Link>
        </section>
    }
})
