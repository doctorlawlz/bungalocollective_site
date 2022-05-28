import React from 'react';
import NavButton from '../Components/NavButton';
import spinningBrick from '../Site_Assets/Spinning_Brick.webm'
import './Home.css';

const Home = () => {
  return (
    <React.Fragment>

      <div className='home-container'>

        <video className='earth-video' src={spinningBrick} loop={true} autoPlay muted/>
          <div className='center-pivot'>
            <div className="flex-grid">
              <NavButton label="BRICK BY BRICK" icon='brickIcon' link="/brickbybrick"/>
              <NavButton label="MUSIC" icon='brickIcon' link="/music"/>
            </div>
            <div className="flex-grid">
              <NavButton label="MERCH" icon='brickIconComingSoon'/>
              <NavButton label="GALLERY" icon='brickIconComingSoon'/>
            </div>
          </div>

      </div>

    </React.Fragment> 
  );
};
  
export default Home;