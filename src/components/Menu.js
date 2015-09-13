/** @jsx React.DOM */

var React = require('react');
var MenuButton = require('./MenuButton');

var Menu = React.createClass({


	_onClick: function (menuLabel) {
		this.props.onClick(menuLabel);
	},

	render: function () {
		return (
			<div className="row cell center-block" id="menu">
				<MenuButton label="mountain" onClick={this._onClick} selected={this.props.selectedMenuItems["mountain"]}/>
				<MenuButton label="island" onClick={this._onClick} selected={this.props.selectedMenuItems["island"]}/>
				<MenuButton label="water" onClick={this._onClick} selected={this.props.selectedMenuItems["water"]}/>
				<MenuButton label="place" onClick={this._onClick} selected={this.props.selectedMenuItems["place"]}/>
			</div>
		);
	}

});

module.exports = Menu;
