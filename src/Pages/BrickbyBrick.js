import React from 'react';
import './BrickbyBrick.css';
import bbbcover from '../Site_Assets/brickbybrick_cover.png'  
const BrickbyBrick = () => {
  return (
    <div>
        <div className='cover-container'>
          <p className='coming-soon'>
            COMING SOON
          </p>
          <a className='presave' href='https://distrokid.com/hyperfollow/bungalo/brick-by-brick'>
            Pre-save!!!
          </a>
          <img src={bbbcover} className='bbbcover'></img>
        </div>
        
    </div>
  );
};
  
export default BrickbyBrick;