import './App.css';
import React from 'react';
import NavButton from './Components/NavButton';
import logo from './Site_Assets/PNGS/White_Logo.png'
import spinningBrick from './Site_Assets/Spinning_Brick.webm'

const App = () => {
  return (
    <React.Fragment>
      <div className='background'></div>
      <div className='home-container'>
        <img src={logo} className='logo'></img>
        <video className='earth-video' src={spinningBrick} loop={true} autoPlay muted/>
        <div className='center-pivot'>
          <div className="flex-grid">
            <NavButton label="BRICK BY BRICK" />
            <NavButton label="MUSIC" />
          </div>
          <div className="flex-grid">
            <NavButton label="MERCH" />
            <NavButton label="GALLERY" />
          </div>
        </div>

      </div>

    </React.Fragment>  
    
  );
}

export default App;
