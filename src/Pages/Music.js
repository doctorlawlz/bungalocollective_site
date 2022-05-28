import React from 'react';
import MusicModal from '../Components/MusicModal';
import SingleCover from '../Components/SingleCover';
import './Music.css'
import { motion } from 'framer-motion';

const Music = () => {
  return (
    <>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        {/* <div className='grid'>
          <SingleCover cname='grid-item' cover='2020'/>
          <SingleCover cname='grid-item' cover='Closer'/>
          <SingleCover cname='grid-item' cover='Heatstroke'/>
          <SingleCover cname='grid-item' cover='WaterisWet'/>
          <SingleCover cname='grid-item' cover='2Basic'/>
          <SingleCover cname='grid-item' cover='Fly'/>
        </div> */}
        <MusicModal clickedCover='2020' title='2020' released='09-18-20'/>
      </motion.div>
    </>
  );
};
  
export default Music;