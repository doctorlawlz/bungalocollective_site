import './App.css';
import React from 'react';
import logo from './Site_Assets/PNGS/White_Logo.png'
import Home from './Pages/Home';
import Music from './Pages/Music';

const App = () => {
  return (
    <React.Fragment>

      <div className='home-container background'>
        
        <img src={logo} className='logo'></img>
        {/* <Home /> */}
        <Music />

      </div>

    </React.Fragment>  
    
  );
}

export default App;
