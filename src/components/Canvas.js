/** @jsx React.DOM */

var React = require('react');
var Content = require('./Content');
var Page = require('./Page');

var data = require('./../data');

var Canvas = React.createClass({

	getInitialState: function () {
		return {
			selectedMenuItems: {
				"water": true,
				"island": true,
				"place": true,
				"mountain": true,
			},
			page: "content",
			dot: null
		};
	},	

	onBackButtonEvent: function (e) {
	  e.preventDefault();
	 	this._onBackClick();
	},
	
	/*
	componentDidUpdate: function () {
		this._setupBackListener();
	},

	componentDidMount: function () {
		this._setupBackListener();
	},

	_setupBackListener: function () {
		var that = this;
		window.addEventListener("hashchange", function(e) {
			if (that.state.page === "page") that._onBackClick();
		})
	},*/

	_onMenuClick: function (menuLabel) {
		var updatedSelectedMenuItems = this.state.selectedMenuItems;
		updatedSelectedMenuItems[menuLabel] = !updatedSelectedMenuItems[menuLabel]
		this.setState({
			selectedMenuItems: updatedSelectedMenuItems
		});
	},

	_onDotClick: function (dotLabel) {
		console.log(dotLabel);
		this.setState({
			page: "page",
			dot: dotLabel
		 });
	},

	_onBackClick: function () {
		this.setState({page: "content"});
	},

	render: function () {
		var content = (
			<Content onMenuClick={this._onMenuClick} onDotClick={this._onDotClick} selectedMenuItems={this.state.selectedMenuItems}/>
		);
		if (this.state.page === "page") content = (
			<Page onMenuClick={this._onMenuClick} onBackClick={this._onBackClick} selectedMenuItems={this.state.selectedMenuItems} data={data[this.state.dot]}/>
		);
		return content;
	}

});

module.exports = Canvas;
