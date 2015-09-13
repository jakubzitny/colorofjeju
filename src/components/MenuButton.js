
/** @jsx React.DOM */
var React = require('react');

var MenuButton = React.createClass({

	propTypes: {
		label: React.PropTypes.string,
  	onClick: React.PropTypes.func,
		selected: React.PropTypes.bool
  },

	_onClick: function () {
		this.props.onClick(this.props.label);
	},

	render: function () {
		var id = "menu-" + this.props.label;
		var anchor = "#"; // + ((this.props.selected) ? this.props.label : "");
		var classes = "menuitem" + ((this.props.selected) ? " selected" : "");
		return (
			<a href={anchor} className={classes} id={id} onClick={this._onClick}></a>
		);
	}

});

module.exports = MenuButton;
