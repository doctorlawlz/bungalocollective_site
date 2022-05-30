import React from 'react';
import { useRef } from 'react';
import NavButton from '../Components/NavButton';
import spinningBrick from '../Site_Assets/Spinning_Brick.webm';
import spinningBrickApple from '../Site_Assets/Spinning_Brick_Apple.mp4';
import './Home.css';
import { motion } from 'framer-motion';


const Home = () => {
  const videoRef = useRef(null);

  return (
    <React.Fragment>

      <motion.div 
        className='home-container'

        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >

        <video ref={videoRef} muted playsInline loop={true} autoPlay className='earth-video'>
          <source src={spinningBrickApple} type='video/mp4;codecs=hvc1'/>
          <source src={spinningBrick} type="video/webm"/>
        </video> 
        
        
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