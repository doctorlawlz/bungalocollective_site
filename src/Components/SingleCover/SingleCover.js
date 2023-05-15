import PropTypes from 'prop-types'
import React, { Component } from 'react'
import "../../Pages/Music/Music.css"

import Twenty from '../../Site_Assets/Single_Album_Arts/2020.jpg'
import Closer from '../../Site_Assets/Single_Album_Arts/Closer.jpg'
import Heatstroke from '../../Site_Assets/Single_Album_Arts/Heatstroke.jpg'
import WaterisWet from '../../Site_Assets/Single_Album_Arts/WaterIsWet.jpg'
import TBasic from '../../Site_Assets/Single_Album_Arts/2_Basic.jpg'
import Fly from '../../Site_Assets/Single_Album_Arts/Fly.png'
import BBB from '../../Site_Assets/brickbybrick_cover.png'
import SPICE from '../../Site_Assets/Single_Album_Arts/Spice.jpg'
import Greener from '../../Site_Assets/Single_Album_Arts/Greener.jpg'
import Plazma from '../../Site_Assets/Single_Album_Arts/Plazma.jpg'

import TwentyFullRes from '../../Site_Assets/Single_Album_Arts/2020_full_res.jpg'
import CloserFullRes from '../../Site_Assets/Single_Album_Arts/Closer_full_res.jpg'
import HeatstrokeFullRes from '../../Site_Assets/Single_Album_Arts/Heatstroke_full_res.jpg'
import WaterisWetFullRes from '../../Site_Assets/Single_Album_Arts/WaterIsWet_full_res.jpg'
import TBasicFullRes from '../../Site_Assets/Single_Album_Arts/2_Basic_full_res.jpg'
import FlyFullRes from '../../Site_Assets/Single_Album_Arts/Fly_full_res.png'
import BBBFullRes from '../../Site_Assets/brickbybrick_cover.png'
import SPICEFullRes from '../../Site_Assets/Single_Album_Arts/Spice_full_res.png'
import GreenerFullRes from '../../Site_Assets/Single_Album_Arts/Greener_full_res.png'
import PlazmaFullRes from '../../Site_Assets/Single_Album_Arts/Plazma_full_res.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faItunesNote } from '@fortawesome/free-brands-svg-icons'
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons'

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
		case 'BBB':
			this.props.fullRes ? coverSrc = BBBFullRes : coverSrc = BBB;
			break;
		case 'SPICE':
			this.props.fullRes ? coverSrc = SPICEFullRes : coverSrc = SPICE;
			break;
		case 'Greener':
			this.props.fullRes ? coverSrc = GreenerFullRes : coverSrc = Greener;
			break;
		case 'Plazma':
			this.props.fullRes ? coverSrc = PlazmaFullRes : coverSrc = Plazma;
			break;
		default:
			break;
	}

	let spotifyLink = '';
	let itunesLink = '';
	let youtubeLink = '';
	let soundcloudLink = '';
	let color = {
		color: 'white',
	}

	switch(this.props.cover){

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
		case 'BBB':
			spotifyLink = 'https://open.spotify.com/album/5yc5H4JePurNCCinq4rXuL?si=C6j5OeZPQYuQGMVqEa9srQ';
			itunesLink = 'https://music.apple.com/us/album/brick-by-brick/1623292927';
			youtubeLink = 'https://youtube.com/playlist?list=PL1CT7SyutL3GXI3uUp38U9rQG5mWJzbKq';
			soundcloudLink = 'https://soundcloud.com/bungalocollective/sets/brick-by-brick-ep/s-u8frfrOPqSe?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
			color = {
				color: '#ffc4b2',
			}
			break;
		case 'SPICE':
			spotifyLink = 'https://open.spotify.com/track/76Lejrx3yj7Mekl2PdqrOo?si=8430a0659a244460';
			itunesLink = 'https://music.apple.com/us/album/spice/1639904717?i=1639904741';
			youtubeLink = 'https://youtu.be/55K1QyYt-hY';
			soundcloudLink = 'https://soundcloud.com/artbyform/bungalo-spice';
			color = {
				color: '#ffffff',
			}
			break;
		case 'Greener':
			spotifyLink = 'https://open.spotify.com/track/6JF2SiaT3FUjBFYVdEvSOK?si=3c03bea3caae48cb';
			itunesLink = 'https://music.apple.com/us/album/greener/1675171110?i=1675171111';
			youtubeLink = 'https://youtu.be/-FFPe-DcuJQ';
			soundcloudLink = 'https://soundcloud.com/bungalocollective/greener-final';
			color = {
				color: '#95eaf5',
			}
			break;
		case 'Plazma':
			spotifyLink = 'https://open.spotify.com/album/1FImiokeGkk9M8YLW51JRC?si=-noDLCfkQRqtoXKBIs-o5w';
			itunesLink = 'https://music.apple.com/ae/album/plazma-ep/1685672898';
			youtubeLink = 'https://youtu.be/YKxEl6Dfqvg';
			soundcloudLink = 'https://soundcloud.com/bungalocollective/sets/plazma-ep/s-Iqm7YzrZhul?si=c6db351f193b461b995ddc45f5dba4c6&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing';
			color = {
				color: '#21e1eb',
			}
			break;
		default:
			break;
	}

	return (
		<>
			<div className='sc-container'>
				<img className={this.props.cname} src={coverSrc}></img>
				<div className='grid-mobile-links query-mobile-grid hide-mobile fa-style-mobile'>
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
		</>
	)
  }
}

SingleCover.propTypes = {
	cover: PropTypes.string,
	fullRes: PropTypes.bool
};