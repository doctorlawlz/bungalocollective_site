import './App.css';
import React from 'react';
import logo from './Site_Assets/PNGS/White_Logo.png';
import AnimatedRoutes from './Components/AnimatedRoutes';
import { BrowserRouter as Router, Link} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <div className='background'></div>
        <Link to="/">
          <img src={logo} className='logo'></img>
        </Link>
        <AnimatedRoutes />
      </Router>
    </>  
    
  );
}

export default App;
