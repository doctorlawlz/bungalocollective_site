import './App.css';
import React from 'react';
import logo from './Site_Assets/PNGS/White_Logo.png'
import Home from './Pages/Home';
import Music from './Pages/Music';
import BrickbyBrick from './Pages/BrickbyBrick'

const App = () => {
  return (
    <>
      <div className='background'></div>
        
        <img src={logo} className='logo'></img>
        {/* { <Home /> } */}
        {/* <Music /> */}
        <BrickbyBrick />
    </>  
    
  );
}

export default App;
