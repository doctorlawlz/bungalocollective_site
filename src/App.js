import React from 'react';
import './App.css';
import NavButton from './Components/NavButton';
import background from "./Site_Assets/space.png"

const App = () => {
  return (
    <React.Fragment>
      <div className="background"></div>
      <NavButton label="BRICK BY BRICK" />
    </React.Fragment>
  );
}

export default App;
