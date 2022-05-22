import React from 'react';
import SingleCover from '../Components/SingleCover';
import './Music.css'
  
const Music = () => {
  return (
    <>
      <div className='grid'>
        <SingleCover cover='2020'/>
        <SingleCover cover='Closer'/>
        <SingleCover cover='Heatstroke'/>
        <SingleCover cover='WaterisWet'/>
        <SingleCover cover='2Basic'/>
        <SingleCover cover='Fly'/>
      </div>
    </>
  );
};
  
export default Music;