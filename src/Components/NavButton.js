import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './NavButton.css'
import brickIcon from "../Site_Assets/PNGS/Brick_icon_small.png"
import brickIconComingSoon from "../Site_Assets/PNGS/Brick_icon_coming_soon_small.png"
import { Link } from 'react-router-dom';

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
		
		default:
			icon = '';
			break;
	}

	const navStyle = {
		color: 'white',
		textDecoration: 'none',
	};

	const ConditionalLink = ({ children, to}) => (to)
      ? <Link style={navStyle} to={to}>{children}</Link>
      : <>{children}</>;

	return (
	  <div className='container col'>
		  <div className='content'>
			<ConditionalLink to={this.props.link}>
				<img src={icon} className='brick' alt='brick'></img>
				<p className='text'>
					{this.props.label}
				</p>
			</ConditionalLink>
		  </div>
	  </div>
	)
  }
}

NavButton.propTypes = {
	label: PropTypes.string,
	icon: PropTypes.string,
	link: PropTypes.string,
};