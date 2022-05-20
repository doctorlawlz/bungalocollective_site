import PropTypes from 'prop-types'
import React, { Component } from 'react'
import brickIcon from "../Site_Assets/PNGS/Brick_icon.png"
import './NavButton.css'

export default class NavButton extends Component {

  render() {
	return (
	  <div className='container col'>
		  <div className='content'>
			<img src={brickIcon} className='brick'></img>
			<p className='text'>
				{this.props.label}
			</p>
		  </div>
	  </div>
	)
  }
}

NavButton.propTypes = {
	label: PropTypes.string
};