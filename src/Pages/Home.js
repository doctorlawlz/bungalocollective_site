import React from 'react';
import NavButton from '../Components/NavButton';
import spinningBrick from '../Site_Assets/Spinning_Brick.webm';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <React.Fragment>

      <motion.div 
        className='home-container'

        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >

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

      </motion.div>

    </React.Fragment> 
  );
};
  
export default Home;