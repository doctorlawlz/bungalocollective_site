import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './NavButton.css'
import brickIcon from "../Site_Assets/PNGS/Brick_icon.png"
import brickIconComingSoon from "../Site_Assets/PNGS/Brick_icon_coming_soon.png"

export default class NavButton extends Component {

  render() {

	let icon = '';

	switch(this.props.icon){

		case 'brickIcon':
			icon = brickIcon;
			break;
			
		case 'brickIconComingSoon':
			icon = brickIconComingSoon;
			break;
	}

	return (
	  <div className='container col'>
		  <div className='content'>
			<img src={icon} className='brick'></img>
			<p className='text'>
				{this.props.label}
			</p>
		  </div>
	  </div>
	)
  }
}

NavButton.propTypes = {
	label: PropTypes.string,
	icon: PropTypes.string,
};