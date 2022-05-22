import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../Pages/Music.css'

import Twenty from '../Site_Assets/Single_Album_Arts/2020.jpg'
import Closer from '../Site_Assets/Single_Album_Arts/Closer.jpg'
import Heatstroke from '../Site_Assets/Single_Album_Arts/Heatstroke.jpg'
import WaterisWet from '../Site_Assets/Single_Album_Arts/WaterIsWet.jpg'
import TBasic from '../Site_Assets/Single_Album_Arts/2_Basic.jpg'
import Fly from '../Site_Assets/Single_Album_Arts/Fly.png'

export default class SingleCover extends Component {

  render() {

	let coverSrc = '';

	switch(this.props.cover){
		case '2020':
			coverSrc = Twenty;
			break;
		case 'Closer':
			coverSrc = Closer
			break;
		case 'Heatstroke':
			coverSrc = Heatstroke;
			break;
		case 'WaterisWet':
			coverSrc = WaterisWet;
			break;
		case '2Basic':
			coverSrc = TBasic;
			break;
		case 'Fly':
			coverSrc = Fly;		
			break;
	}

	return (
		<>
			<img className='grid-item' src={coverSrc}></img>
		</>
	)
  }
}

SingleCover.propTypes = {
	cover: PropTypes.string
};