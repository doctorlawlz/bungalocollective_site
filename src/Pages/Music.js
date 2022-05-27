import React from 'react';
import MusicModal from '../Components/MusicModal';
import SingleCover from '../Components/SingleCover';
import './Music.css'
  
const Music = () => {
  return (
    <>
      {/* <div className='grid'>
        <SingleCover cname='grid-item' cover='2020'/>
        <SingleCover cname='grid-item' cover='Closer'/>
        <SingleCover cname='grid-item' cover='Heatstroke'/>
        <SingleCover cname='grid-item' cover='WaterisWet'/>
        <SingleCover cname='grid-item' cover='2Basic'/>
        <SingleCover cname='grid-item' cover='Fly'/>
      </div> */}
      <MusicModal clickedCover='2020' title='2020' released='09-18-20'/>
    </>
  );
};
  
export default Music;