/** @jsx React.DOM */

var React = require('react');

var Dot = React.createClass({

	getInitialState: function () {
		return {
			displayToolTip: false
		};
	},

	componentDidMount: function () {
		this._enableTooltip();
	},

	componentDidUpdate: function () {
		this._enableTooltip();
	},

	_enableTooltip: function () {
		var toolTipTemplate =
			'<div class="tooltip top">' +
				'<div class="tooltip-arrow tooltip-mine-arrow" style="border-top-color: ' + this.props.data.color + '"></div>' +
				'<div class="tooltip-inner tooltip-mine" style="color: ' + this.props.data.color + '; background-image: url(\'assets/pages/' + this.props.data.label + '/bubble.png\')"></div>' +
       '</div>';
  	$(React.findDOMNode(this)).tooltip({ template: toolTipTemplate });
	},

	_isHidden: function () {
		if (!this.props.selectedMenuItems[this.props.dataMenu]) return true;
		return false;
	},

	render: function () {
		var dotId = "dot-" + this.props.label;
		var classes = "dot" + (this._isHidden() ? " dot-hidden" : " dot-" + this.props.color);
		var dotStyle = {
			marginTop: this.props.marginTop,
			marginLeft: this.props.marginLeft
		};
		var anchor = "#" + this.props.label;
		return (
			<a id={dotId} data-menu={this.props.dataMenu} ref="dot" title="." className={classes} href={anchor} style={dotStyle} onClick={this.props.onClick.bind(null, this.props.label)}></a>
		);
	}

});

module.exports = Dot;
