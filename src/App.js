import './App.css';
import React from 'react';
import NavButton from './Components/NavButton';

const App = () => {
  return (
 
    <React.Fragment>
    <div className="background"></div>
      {/* <video src={spinningBrick} width="600" height="300" controls="controls" autoplay="true" /> */}
    <NavButton label="BRICK BY BRICK" />
    </React.Fragment>  
  );
}

export default App;
