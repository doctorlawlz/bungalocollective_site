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

	let spotifyLink = '';
	let itunesLink = '';
	let youtubeLink = '';
	let soundcloudLink = '';
	let color = {
		color: 'white',
	}

	switch(this.props.clickedCover){

		case '2020':
			spotifyLink = 'https://open.spotify.com/track/1aliVNcHyuAPbLEuoZ6BTx?si=ATXLe0d7Rx6wgM2zCaVbsg';
			itunesLink = 'https://music.apple.com/us/album/2020/1510549718?i=1510549723';
			youtubeLink = 'https://youtu.be/w79V8qmarpI';
			soundcloudLink = 'https://soundcloud.com/bungalocollective/2020-final';
			color = {
				color: '#bf80f3',
			}
			break;
		case 'Closer':
			spotifyLink = 'https://open.spotify.com/track/0hgiAjEreapYOSWCQx8jwO?si=G8WY4qH1Q3OBdnaNTrQHJQ';
			itunesLink = 'https://music.apple.com/us/album/closer-single/1529803228';
			youtubeLink = 'https://youtu.be/kPy2YfJMitA';
			soundcloudLink = 'https://soundcloud.com/bungalocollective/closer';
			color = {
				color: '#a697f9',
			}
			break;
		case 'Heatstroke':
			spotifyLink = 'https://open.spotify.com/track/0wij6w6sEurbuQzkzInU6h?si=7UVcJVcOSQ6sirPL9hZ0Iw';
			itunesLink = 'https://music.apple.com/us/album/heatstroke/1545156371?i=1545156372';
			youtubeLink = 'https://youtu.be/cCRsnKs8gdQ';
			soundcloudLink = 'https://soundcloud.com/bungalocollective/heatstroke';
			color = {
				color: '#ffca37',
			}
			break;
		case 'WaterisWet':
			spotifyLink = 'https://open.spotify.com/track/3jshRKH8eDCvf1HAAacJ4i?si=b06b3beb980b440b';
			itunesLink = 'https://music.apple.com/us/album/water-is-wet/1545154286?i=1545154287';
			youtubeLink = 'https://youtu.be/VIGWFKyyfOM';
			soundcloudLink = 'https://soundcloud.com/bungalocollective/water-is-wet';
			color = {
				color: '#8de4ff',
			}
			break;
		case '2Basic':
			spotifyLink = 'https://open.spotify.com/track/2w3In424GePfY1JODGEDob?si=9d4e6bc24789412b';
			itunesLink = 'https://music.apple.com/us/album/2-basic/1551093644?i=1551093646';
			youtubeLink = 'https://youtu.be/UKC-NKU49Jg';
			soundcloudLink = 'https://soundcloud.com/bungalocollective/2-basic';
			color = {
				color: '#f9d5b5',
			}
			break;
		case 'Fly':
			spotifyLink = 'https://open.spotify.com/track/2nbJ0u2sHRRTXxjPurNqf4?si=148aa7bae0c947fb';
			itunesLink = 'https://music.apple.com/us/album/fly-single/1553594411';
			youtubeLink = 'https://youtu.be/BmtBNhWF9Wo';
			soundcloudLink = 'https://soundcloud.com/bungalocollective/fly';
			color = {
				color: '#78fbd1',
			}
			break;
		default:
			break;
	}

	return (
		<>
			<div className='coverContainer'>

				<SingleCover cname='main-image' cover={this.props.clickedCover} fullRes={true}/>
				
				<div className='hide'>

					<h1 style={color}>{this.props.title}</h1>
					<div className='grid-modal fa-style'>
						<a class="fa-link-container" href={spotifyLink} target="_blank" style={color}>
							<FontAwesomeIcon icon={faSpotify} />
						</a>
						<a class="fa-link-container" href={itunesLink} target="_blank" style={color}>
							<FontAwesomeIcon icon={faItunesNote} />
						</a>
						<a class="fa-link-container" href={youtubeLink} target="_blank" style={color}>
							<FontAwesomeIcon icon={faYoutube} />
						</a>
						<a class="fa-link-container" href={soundcloudLink} target="_blank" style={color}>
							<FontAwesomeIcon icon={faSoundcloud} />
						</a>
					</div> 

				</div>
				<h2 style={color}>RELEASED: {this.props.released}</h2>
				
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
