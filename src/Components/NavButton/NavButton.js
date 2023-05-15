import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './NavButton.css'
import brickIcon from "../../Site_Assets/PNGS/Brick_icon_small.png"
import plazmaIcon from "../../Site_Assets/PNGS/Plazma_icon.png"
import musicIcon from "../../Site_Assets/PNGS/Music_icon.png"
import merchIcon from "../../Site_Assets/PNGS/Merch_icon.png"
import brickIconComingSoon from "../../Site_Assets/PNGS/Brick_icon_coming_soon_small.png"
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

		case 'plazmaIcon':
			icon = plazmaIcon;
			break;

		case 'musicIcon':
			icon = musicIcon;
			break;

		case 'merchIcon':
			icon = merchIcon;
			break;
	
		default:
			icon = '';
			break;
	}

	const navStyle = {
		color: 'white',
		textDecoration: 'none',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	};

	const ConditionalLink = ({ children, to}) => (to)
      ? <Link style={navStyle} to={to}>{children}</Link>
      : <>{children}</>;

	return (
	  <div className='container col'>
		  <div className='content'>
			<div className='nav-button-img-container'>
				<ConditionalLink to={this.props.link}>
					<img src={icon} className={`nav-button ${this.props.style}`} alt='brick'></img>
					<p className='text'>
						{this.props.label}
					</p>
				</ConditionalLink>
			</div>
		  </div>
	  </div>
	)
  }
}

NavButton.propTypes = {
	label: PropTypes.string,
	icon: PropTypes.string,
	link: PropTypes.string,
	style: PropTypes.string
};