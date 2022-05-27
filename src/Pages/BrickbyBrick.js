import React from 'react';
import './BrickbyBrick.css';
import bbbcover from '../Site_Assets/coming_soon.jpg'  
const BrickbyBrick = () => {
  return (
    <div>
        <div className='cover-container'>
          <div className='presave-container'>
            <a className='presave' href='https://distrokid.com/hyperfollow/bungalo/brick-by-brick'>
              Pre-save!!!
            </a>
          </div>
          <img src={bbbcover} className='bbbcover'></img>
        </div>
        
    </div>
  );
};
  
export default BrickbyBrick;