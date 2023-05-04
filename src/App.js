import './App.css';
import React from 'react';
import logo from './Site_Assets/GIFS/Bungalo-Drawn-Logo-White.gif';
import AnimatedRoutes from './Components/AnimatedRoutes';
import { HashRouter as Router, Link} from 'react-router-dom';
// import { BrowserRouter as Router, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <div className='background'></div>
        <Link to="/">
          <img src={logo} className='logo color-overlay' alt='logo'></img>
        </Link>
        <AnimatedRoutes />
      </Router>
    </>  
    
  );
}

export default App;
