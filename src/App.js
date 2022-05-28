import './App.css';
import React from 'react';
import logo from './Site_Assets/PNGS/White_Logo.png';
import Home from './Pages/Home';
import Music from './Pages/Music';
import BrickbyBrick from './Pages/BrickbyBrick'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <div className='background'></div>
        <img src={logo} className='logo'></img>
        
        {/* { <Home /> } */}
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/music" element={<Music />} />
          <Route path="brickbybrick" element={<BrickbyBrick/>} />
        </Routes>
        
        
      </Router>
    </>  
    
  );
}

export default App;
