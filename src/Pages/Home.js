import React from 'react';
import NavButton from '../Components/NavButton';
import spinningBrick from '../Site_Assets/Spinning_Brick.webm'

const Home = () => {
  return (
    <React.Fragment>

      <div className='home-container'>
        
	  	<video className='earth-video' src={spinningBrick} loop={true} autoPlay muted/>
        <div className='center-pivot'>
          <div className="flex-grid">
            <NavButton label="BRICK BY BRICK" />
            <NavButton label="MUSIC" />
          </div>
          <div className="flex-grid">
            <NavButton label="MERCH" />
            <NavButton label="GALLERY" />
          </div>
        </div>

      </div>

    </React.Fragment> 
  );
};
  
export default Home;