var React = require('react');
var SidebarItem = require('./sidebaritem');

module.exports = React.createClass({
    render: function() {
        return <section className="sidebar">
            {this.renderList()}
        </section>
    },
    renderList: function() {
        return this.props.items.map(function(item) {
            return <SidebarItem text={item}/>
        });
    }
})
