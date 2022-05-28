import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SingleCover from './SingleCover'
import './MusicModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faItunesNote } from '@fortawesome/free-brands-svg-icons'
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons'


export default class MusicModal extends Component {

  render() {

	return (
		<>
			<div className='coverContainer'>

				<SingleCover cname='main-image' cover={this.props.clickedCover} fullRes={true}/>
				
				<div className='hide'>

					<h1>{this.props.title}</h1>
					<div className='grid-modal fa-style'>
						<FontAwesomeIcon icon={faSpotify} />
						<FontAwesomeIcon icon={faItunesNote} />
						<FontAwesomeIcon icon={faYoutube} />
						<FontAwesomeIcon icon={faSoundcloud} />
					</div> 

				</div>
				<h2>RELEASED: {this.props.released}</h2>
				
			</div>
		</>
	)

  }
}

MusicModal.propTypes = {
	title: PropTypes.string,
	clickedCover: PropTypes.string,
	released: PropTypes.string
};
