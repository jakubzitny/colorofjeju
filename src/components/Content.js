/** @jsx React.DOM */

var React = require('react');

var Menu = require('./Menu');
var Dot = require('./Dot');
var data = require('./../data');

var Content = React.createClass({

	render: function () {
		return (
			<div className="row" id="content">
			  <div className="col-xs-1 topcol topcol-1"></div>
			  <div className="col-xs-1 topcol topcol-2">
					<div className="row cell cell-10"></div>
					<Menu onClick={this.props.onMenuClick} selectedMenuItems={this.props.selectedMenuItems} />
					<div className="row cell cell-10" id="wave1">
						<div className="wave-blue-small"></div>
					</div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-5"></div>
					<div className="row cell cell-5">
						<div className="corner-left"></div>
					</div>
				</div>
			  <div className="col-xs-1 topcol topcol-3">
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-10"></div>
					<div className="row cell cell-10" id="wave2">
						<div className="wave-blue-large"></div>
					</div>
					<div className="row cell cell-10"></div>
					<div className="row cell cell-10">
						<div className="col-md-8"></div>
						<div className="col-md-4">
							<div className="thing-blue-dotted"></div>
						</div>
					</div>
				</div>
			  <div className="col-xs-1 topcol topcol-4">
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20" id="wave3">
						<div className="wave-green-large"></div>
					</div>
					<div className="row cell cell-20 center-block">
						<Dot data={data["a"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="a" dataMenu="water" color="blue" marginTop="-15px" marginLeft="45px" />
						<Dot data={data["b"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="b" dataMenu="island" color="green" marginTop="-15px" marginLeft="15px" />
						<Dot data={data["c"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="c" dataMenu="water" color="blueish" marginTop="35px" marginLeft="-18px" />
						<Dot data={data["d"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="d" dataMenu="place" color="red" marginTop="25px" marginLeft="35px" />
					</div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-10 center-block">
						<Dot data={data["e"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="e" dataMenu="island" color="beige" marginTop="25px" marginLeft="35px" />
						<Dot data={data["f"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="f" dataMenu="island" color="brown" marginTop="0px" marginLeft="0px" />
					</div>
					<div className="row cell cell-10"></div>
				</div>
			  <div className="col-xs-1 topcol topcol-5">
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-10 center-block">
						<Dot data={data["g"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="g" dataMenu="place" color="darkgreen" marginTop="-45px" marginLeft="10px" />
					</div>
					<div className="row cell cell-10 center-block">
						<Dot data={data["h"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="h" dataMenu="mountain" color="yellow" marginTop="20px" marginLeft="10px" />
						<Dot data={data["i"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="i" dataMenu="mountain" color="lightgreen" marginTop="10px" marginLeft="-30px" />
					</div>
					<div className="row cell cell-20"></div>
					
				</div>
			  <div className="col-xs-1 topcol topcol-6">
					<div className="row cell cell-5"></div>
					<div className="row cell cell-10 center-block">
							<div className="thing-green-mixed"></div>
					</div>
					<div className="row cell cell-10"></div>
					<div className="row cell cell-10 center-block">
						<Dot data={data["j"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="j" dataMenu="water" color="darkred" marginTop="25px" marginLeft="0px" />
					</div>
					<div className="row cell cell-10"></div>
					<div className="row cell cell-5"></div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-10"></div>
					<div className="row cell cell-10">
							<div className="wave-green-large"></div>
					</div>
				</div>
			  <div className="col-xs-1 topcol topcol-7">
					<div className="row cell cell-10"></div>
					<div className="row cell cell-10 center-block">
							<div className="wave-blue-large"></div>
					</div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-10"></div>
					<div className="row cell cell-10 center-block">
						<Dot data={data["k"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="k" dataMenu="place" color="gray" marginTop="7px" marginLeft="9px" />
						<Dot data={data["l"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="l" dataMenu="place" color="black" marginTop="-12px" marginLeft="-23px" />
						<Dot data={data["n"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="n" dataMenu="place" color="orange" marginTop="-35px" marginLeft="70px" />
						<Dot data={data["o"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="o" dataMenu="place" color="lightblue" marginTop="0px" marginLeft="40px" />
					</div>
					<div className="row cell cell-20"></div>
				</div>
			  <div className="col-xs-1 topcol topcol-8">
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20">
						<Dot data={data["p"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="p" dataMenu="water" color="darkgray" marginTop="-5px" marginLeft="35px" />
					</div>
					<div className="row cell cell-10">
					</div>
					<div className="row cell cell-20 center-block">
						<Dot data={data["m"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="m" dataMenu="mountain" color="purple" marginTop="-10px" marginLeft="-85px" />
					</div>
					<div className="row cell cell-5"></div>
					<div className="row cell cell-10">
							<div className="thing-blue-solid center-block"></div>
					</div>
					<div className="row cell cell-5 center-block">
							<div className="wave-blue-small"></div>
					</div>
					<div className="row cell cell-10"></div>
				</div>
			  <div className="col-xs-1 topcol topcol-9">
					<div className="row cell cell-5"></div>
					<div className="row cell cell-5">
							<div className="thing-blue-solid"></div>
					</div>
					<div className="row cell cell-10"></div>
					<div className="row cell cell-10 center-block">
					</div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-10"></div>
				</div>
			  <div className="col-xs-1 topcol topcol-10">
					<div className="row cell cell-5"></div>
					<div className="row cell cell-10">
						<div className="wave-green-small"></div>
					</div>
					<div className="row cell cell-5"></div>
					<div className="row cell cell-10">
						<Dot data={data["q"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="q" dataMenu="water" color="darkblue" marginTop="-10px" marginLeft="-50px" />
						<Dot data={data["r"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="r" dataMenu="place" color="darkgray2" marginTop="40px" marginLeft="-80px" />
					</div>
					<div className="row cell cell-20">
						<Dot data={data["s"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="s" dataMenu="place" color="lightgreen2" marginTop="20px" marginLeft="-30px" />
					</div>
					<div className="row cell cell-20">
						<Dot data={data["t"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="t" dataMenu="place" color="weirdorange" marginTop="0px" marginLeft="-30px" />
					</div>
					<div className="row cell cell-10">
						<div className="wave-blue-small"></div>
					</div>
					<div className="row cell cell-20"></div>
				</div>
			  <div className="col-xs-1 topcol topcol-11">
					<div className="row cell cell-10"></div>
					<div className="row cell cell-20">
						<div className="wave-blue-small"></div>
					</div>
					<div className="row cell cell-20">
						<Dot data={data["u"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="u" dataMenu="water" color="lightblue2" marginTop="10px" marginLeft="15px" />
						<Dot data={data["v"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="v" dataMenu="island" color="darkgreen2" marginTop="15px" marginLeft="-5px" />
						<Dot data={data["w"]} selectedMenuItems={this.props.selectedMenuItems} onClick={this.props.onDotClick} label="w" dataMenu="mountain" color="lightbrown" marginTop="15px" marginLeft="-55px" />
					</div>
					<div className="row cell cell-10"></div>
					<div className="row cell cell-20">
						<div className="wave-green-large"></div>
					</div>
					<div className="row cell cell-20"></div>
				</div>
			  <div className="col-xs-1 topcol topcol-12">
					<div className="row cell cell-20">
						<div className="corner-right"></div>
					</div>
					<div className="row cell cell-20"></div>
					<div className="row cell cell-20">
						<div className="wave-green-small"></div>
					</div>
					<div className="row cell cell-20">
						<div className="thing-blue-mixed"></div>
					</div>
					<div className="row cell cell-10">
						<div className="wave-green-small"></div>
					</div>
					<div className="row cell cell-5"></div>
					<div className="row cell cell-5">
						<div className="jeju-logo"></div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Content;
