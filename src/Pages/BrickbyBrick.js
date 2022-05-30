import React from 'react';
import './BrickbyBrick.css';
import bbbcover from '../Site_Assets/coming_soon.jpg'  
import { motion } from 'framer-motion';

const BrickbyBrick = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
        <div className='cover-container'>
          <div className='presave-container'>
            <a className='presave' href='https://distrokid.com/hyperfollow/bungalo/brick-by-brick'>
              Pre-save!!!
            </a>
          </div>
          <div className='video-wrapper'>
            <div className='video-container'>
              <iframe src="https://www.youtube.com/embed/qhKsuJRkowI?rel=0" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          
          <img src={bbbcover} className='bbbcover'></img>
        </div>
        
    </motion.div>
  );
};
  
export default BrickbyBrick;