/** @jsx React.DOM */

var React = require('react');

var MenuButton = require('./MenuButton');
var Dot = require('./Dot');

var Page = React.createClass({
	render: function () {
		var h1Style = {
			borderBottom: "2px solid " + this.props.data.color
		};
		var assetPath = "assets/pages/" + this.props.data.label;
		return (
			<div className="row" id="page">
				<div className="col-xs-1"></div>
				<div id="menu" className="col-xs-1 topcol">
					<div className="row cell cell-10"></div>
					<div className="row cell center-block" id="menu">
						<MenuButton label={this.props.data.group} selected={true} />
						<a href="#" onClick={this.props.onBackClick}>back</a>
					</div>
					<div className="row cell cell-10"></div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-5"></div>
					<div className="row cell cell-5">
						<div className="corner-left"></div>
					</div>
				</div>
				<div className="col-xs-1 topcol"></div>
				<div className="col-xs-8 topcol">
					<div className="row" id="title">
						<div className="col-md-12">
							<img src={assetPath + "/title-corner.png"} />
							<h1 style={h1Style}>{this.props.data.title}</h1>
						</div>
					</div>
					<div className="row" id="article">
						<div className="col-md-4">
							<p>{this.props.data.p1}</p>
						</div>
						<div className="col-md-4">
							<p>{this.props.data.p2}</p>
						</div>
						<div className="col-md-4 featured-img hidden-xs hidden-sm">
							<img src={assetPath + "/featured-image.png"} />
						</div>
					</div>
					<div className="row" id="bubbles">
						<div className="col-md-3">
							<img src={assetPath + "/1.png"} />
							<img src={assetPath + "/5.png"} />
						</div>
						<div className="col-md-3">
							<img src={assetPath + "/2.png"} />
							<img src={assetPath + "/6.png"} />
						</div>
						<div className="col-md-3">
							<img src={assetPath + "/3.png"} />
							<img src={assetPath + "/7.png"} />
						</div>
						<div className="col-md-3">
							<img src={assetPath + "/4.png"} />
							<img src={assetPath + "/8.png"} />
						</div>
					</div>
				</div>
				<div className="col-xs-1 topcol">
					<div className="row cell cell-20">
						<div className="corner-right"></div>
					</div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-10"></div>
					<div className="row cell cell-5"></div>
					<div className="row cell cell-5">
						<div className="jeju-logo"></div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Page;
