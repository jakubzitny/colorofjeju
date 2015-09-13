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
  	$(React.findDOMNode(this)).tooltip();
	},

	_isHidden: function () {
		if (!this.props.selectedMenuItems[this.props.dataMenu]) return true;
		return false;
	},

	_onMouseOver: function () {
		this.setState({ displayToolTip: true });
	},
	_onMouseOut: function () {
		this.setState({ displayToolTip: false });
	},

	_getToolTip: function () {
		var arrowStyle = {
			left: "50%"
		};
		var toolTip = null;
		if (this.state.displayToolTip) {
  		var node = React.findDOMNode(this.refs.dot);
			var offset = $(node).offset();
			var posY = offset.top - $(window).scrollTop();
			var posX = offset.left - $(window).scrollLeft(); 
			console.log(posX + " " + posY);
  		var dotPositionA = React.findDOMNode(this).getClientRects();
			var dotPosition = dotPositionA[1];
			console.log(dotPosition);
			var toolTipStyle = {
				top: (posX - 150) + 'px',
				left: (posY - 150) + 'px',
				display: 'block'
			};
			console.log(toolTipStyle);
			toolTip = (
				<div className="tooltip fade top in" role="tooltip" style={toolTipStyle}>
					<div className="tooltip-arrow" style={arrowStyle}></div>
					<div className="tooltip-inner">.</div>
				</div>
			);
		};
		return toolTip;
	},

	render: function () {
		if (this._isHidden()) return false;
		var dotId = "dot-" + this.props.label;
		var classes = "dot" + " dot-" + this.props.color;
		var dotStyle = {
			marginTop: this.props.marginTop,
			marginLeft: this.props.marginLeft
		};
		var bubble = null;
		if (this.props.label === "c") {
			bubble = (
				<div className="bubble"></div>
			);
		}

		return (
			<a id={dotId} data-menu={this.props.dataMenu} ref="dot" title="." className={classes} href="#" style={dotStyle} onClick={this.props.onClick.bind(null, this.props.label)}></a>
		);
	}

});

module.exports = Dot;
