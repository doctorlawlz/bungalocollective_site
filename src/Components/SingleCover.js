import PropTypes from 'prop-types'
import React, { Component } from 'react'
import '../Pages/Music.css'

import Twenty from '../Site_Assets/Single_Album_Arts/2020.jpg'
import Closer from '../Site_Assets/Single_Album_Arts/Closer.jpg'
import Heatstroke from '../Site_Assets/Single_Album_Arts/Heatstroke.jpg'
import WaterisWet from '../Site_Assets/Single_Album_Arts/WaterIsWet.jpg'
import TBasic from '../Site_Assets/Single_Album_Arts/2_Basic.jpg'
import Fly from '../Site_Assets/Single_Album_Arts/Fly.png'

import TwentyFullRes from '../Site_Assets/Single_Album_Arts/2020_full_res.jpg'
import CloserFullRes from '../Site_Assets/Single_Album_Arts/Closer_full_res.jpg'
import HeatstrokeFullRes from '../Site_Assets/Single_Album_Arts/Heatstroke_full_res.jpg'
import WaterisWetFullRes from '../Site_Assets/Single_Album_Arts/WaterIsWet_full_res.jpg'
import TBasicFullRes from '../Site_Assets/Single_Album_Arts/2_Basic_full_res.jpg'
import FlyFullRes from '../Site_Assets/Single_Album_Arts/Fly_full_res.png'

export default class SingleCover extends Component {

  render() {

	let coverSrc = '';

	switch(this.props.cover){
		case '2020':
			this.props.fullRes ? coverSrc = TwentyFullRes : coverSrc = Twenty;
			break;
		case 'Closer':
			this.props.fullRes ? coverSrc = CloserFullRes : coverSrc = Closer;
			break;
		case 'Heatstroke':
			this.props.fullRes ? coverSrc = HeatstrokeFullRes : coverSrc = Heatstroke;
			break;
		case 'WaterisWet':
			this.props.fullRes ? coverSrc = WaterisWetFullRes : coverSrc = WaterisWet;
			break;
		case '2Basic':
			this.props.fullRes ? coverSrc = TBasicFullRes : coverSrc = TBasic;
			break;
		case 'Fly':
			this.props.fullRes ? coverSrc = FlyFullRes : coverSrc = Fly;		
			break;
		default:
			break;
	}

	return (
		<>
			<img className={this.props.cname} src={coverSrc}></img>
		</>
	)
  }
}

SingleCover.propTypes = {
	cover: PropTypes.string,
	fullRes: PropTypes.bool
};