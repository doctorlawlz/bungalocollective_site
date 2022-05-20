import PropTypes from 'prop-types'
import React, { Component } from 'react'
import brickIcon from "../Site_Assets/PNGS/Brick_icon.png"

export default class NavButton extends Component {

  render() {
	return (
	  <div 
	  style={{
		height: "18vh",
		width: "auto"
	  }}>
		  <img src={brickIcon}
			style={{ height: "17vh" }}>
		  </img>
		  <div 
			style={{
				color: "white",
				textAlign: "center"
			}}>
			  {this.props.label}
		  </div>
	  </div>
	)
  }
}

NavButton.propTypes = {
	label: PropTypes.string
};