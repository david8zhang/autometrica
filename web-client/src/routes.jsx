var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Charts = require('./components/charts');

module.exports = (
    <Router>
        <Route path="/" component={Main}>
            <Route path ="charts" component={Charts} />
        </Route>
    </Router>
)
