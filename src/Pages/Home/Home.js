import React from 'react';
import { useRef } from 'react';
import NavButton from '../../Components/NavButton/NavButton';
import spinningBrick from '../../Site_Assets/Spinning_Brick.webm';
import spinningBrickApple from '../../Site_Assets/Spinning_Brick_Apple.mp4';
import plazmaFisheye from '../../Site_Assets/PNGS/plazma_fisheye.png';
import chrisDance from '../../Site_Assets/GIFS/chris_dance_optimized.gif';
import danDance from '../../Site_Assets/GIFS/dan_dance_optimized.gif';
import liamDance from '../../Site_Assets/GIFS/liam_dance_optimized.gif';
import jonDance from '../../Site_Assets/GIFS/jon_dance_optimized.gif';
import jacobDance from '../../Site_Assets/GIFS/jacob_dance_optimized.gif';
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
        {/*
          <div class="dancing-bungaboys">
            <img src={chrisDance} style={{ marginRight: '1%', height: '49%'}} />
            <img src={danDance}style={{ height: '51%'}} />
            <img src={liamDance} style={{ marginLeft: '2%', height: '45%'}}/>
            <img src={jonDance} style={{ height: '54%'}}/>
            <img src={jacobDance} style={{ height: '51%'}}/>
          </div>
        */}
        
        <div className='center-image-container'>
          <img src={plazmaFisheye}/>
        </div> 

          <div className='center-pivot'>
            <div className="flex-grid">
              <NavButton label="PLAZMA" icon='plazmaIcon' link="/plazma" style="plazma"/>
              <NavButton label="MUSIC" icon='musicIcon' link="/music" style="music"/>
            </div>
            <div className="flex-grid">
              <NavButton label="BRICK BY BRICK" icon='brickIcon' link="/brickbybrick" style="brick"/>
              <NavButton label="STORE" icon='merchIcon' link="/" style="merch"/>
            </div>
          </div>

      </motion.div>

    </React.Fragment> 
  );
};
  
export default Home;